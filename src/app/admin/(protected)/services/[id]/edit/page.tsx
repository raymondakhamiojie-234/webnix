import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { updateService } from "../../actions"
import prisma from "@/lib/db"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const service = await prisma.service.findUnique({
    where: { id }
  })

  if (!service) {
    redirect("/admin/services")
  }

  // Server Action inline to handle the update
  const handleUpdate = async (formData: FormData) => {
    "use server"
    await updateService(id, {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      price: formData.get("price") ? parseFloat(formData.get("price") as string) : undefined,
      ctaText: (formData.get("ctaText") as string) || "Get a Quote",
      isActive: formData.get("isActive") === "true",
    })
    redirect("/admin/services")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Edit Service</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/services">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleUpdate} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Service Title</label>
              <Input name="title" required defaultValue={service.title} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea name="description" required defaultValue={service.description} className="min-h-[100px]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Price (₦) - Optional</label>
                <Input name="price" type="number" defaultValue={service.price || ""} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Call to Action Text</label>
                <Input name="ctaText" defaultValue={service.ctaText} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select name="isActive" defaultValue={service.isActive ? "true" : "false"} className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit">
                Update Service
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
