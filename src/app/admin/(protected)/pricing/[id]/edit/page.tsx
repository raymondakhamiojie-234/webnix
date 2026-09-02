import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { updatePricing } from "../../actions"
import prisma from "@/lib/db"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function EditPricingPage({ params }: { params: { id: string } }) {
  const pkg = await prisma.pricingPackage.findUnique({
    where: { id: params.id }
  })

  if (!pkg) {
    redirect("/admin/pricing")
  }

  const handleUpdate = async (formData: FormData) => {
    "use server"
    
    const featuresText = formData.get("features") as string
    const features = featuresText.split('\n').filter(f => f.trim() !== '')

    await updatePricing(params.id, {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: formData.get("price") ? parseFloat(formData.get("price") as string) : undefined,
      currency: (formData.get("currency") as string) || "₦",
      features,
      ctaText: (formData.get("ctaText") as string) || "Request a Quote",
      isPopular: formData.get("isPopular") === "true",
      isActive: formData.get("isActive") === "true",
    })
    redirect("/admin/pricing")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Edit Package</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/pricing">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Package Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleUpdate} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Package Name</label>
                <Input name="name" required defaultValue={pkg.name} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Is Popular?</label>
                <select name="isPopular" defaultValue={pkg.isPopular ? "true" : "false"} className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Input name="description" defaultValue={pkg.description || ""} />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Price</label>
                <Input name="price" type="number" defaultValue={pkg.price || ""} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Currency</label>
                <Input name="currency" defaultValue={pkg.currency} />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Call to Action Text</label>
              <Input name="ctaText" defaultValue={pkg.ctaText} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Features (One per line)</label>
              <Textarea name="features" required defaultValue={pkg.features.join('\n')} className="min-h-[150px]" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select name="isActive" defaultValue={pkg.isActive ? "true" : "false"} className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit">
                Update Package
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
