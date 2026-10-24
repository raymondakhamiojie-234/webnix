import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { updatePortfolio } from "../../actions"
import prisma from "@/lib/db"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function EditPortfolioPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = await prisma.portfolioProject.findUnique({
    where: { id }
  })

  if (!project) {
    redirect("/admin/portfolio")
  }

  const handleUpdate = async (formData: FormData) => {
    "use server"
    
    const techsText = formData.get("technologies") as string
    const technologies = techsText.split(',').map(t => t.trim()).filter(t => t !== '')

    await updatePortfolio(id, {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      featuredImg: (formData.get("featuredImg") as string) || undefined,
      clientName: formData.get("clientName") as string,
      projectUrl: formData.get("projectUrl") as string,
      technologies,
      isFeatured: formData.get("isFeatured") === "true",
    })
    redirect("/admin/portfolio")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Edit Project</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/portfolio">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleUpdate} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Name</label>
                <Input name="name" required defaultValue={project.name} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Input name="category" required defaultValue={project.category} />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea name="description" required defaultValue={project.description} className="min-h-[100px]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Client Name</label>
                <Input name="clientName" defaultValue={project.clientName || ""} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Project URL</label>
                <Input name="projectUrl" type="url" defaultValue={project.projectUrl || ""} />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Image URL / Screenshot (Optional)</label>
              <Input name="featuredImg" placeholder="https://..." defaultValue={project.featuredImg || ""} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Technologies (comma separated)</label>
              <Input name="technologies" required defaultValue={project.technologies.join(', ')} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Is Featured?</label>
              <select name="isFeatured" defaultValue={project.isFeatured ? "true" : "false"} className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit">
                Update Project
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
