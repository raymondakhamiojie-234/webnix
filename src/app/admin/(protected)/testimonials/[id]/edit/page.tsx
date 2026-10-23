import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { updateTestimonial } from "../../actions"
import prisma from "@/lib/db"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const testimonial = await prisma.testimonial.findUnique({
    where: { id }
  })

  if (!testimonial) {
    redirect("/admin/testimonials")
  }

  const handleUpdate = async (formData: FormData) => {
    "use server"
    
    await updateTestimonial(id, {
      customerName: formData.get("customerName") as string,
      company: formData.get("company") as string,
      content: formData.get("content") as string,
      rating: parseInt(formData.get("rating") as string),
      isActive: formData.get("isActive") === "true",
    })
    redirect("/admin/testimonials")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Edit Testimonial</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/testimonials">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Testimonial Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleUpdate} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Customer Name</label>
                <Input name="customerName" required defaultValue={testimonial.customerName} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>
                <Input name="company" defaultValue={testimonial.company || ""} />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Testimonial Content</label>
              <Textarea name="content" required defaultValue={testimonial.content} className="min-h-[120px]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Rating (1-5)</label>
                <Input name="rating" type="number" required min="1" max="5" defaultValue={testimonial.rating} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <select name="isActive" defaultValue={testimonial.isActive ? "true" : "false"} className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit">
                Update Testimonial
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
