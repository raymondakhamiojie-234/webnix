import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/db"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, Edit, Trash2 } from "lucide-react"
import { deletePortfolio } from "./actions"

export default async function PortfolioPage() {
  let projects: any[] = []
  
  try {
    projects = await prisma.portfolioProject.findMany({
      orderBy: { displayOrder: 'asc' }
    })
  } catch (error) {
    console.error("Database connection failed for portfolio projects:", error)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Portfolio Projects</h1>
        <Button asChild>
          <Link href="/admin/portfolio/new"><Plus className="w-4 h-4 mr-2" /> Add Project</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Projects</CardTitle>
        </CardHeader>
        <CardContent>
          {projects.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No portfolio projects found. Click "Add Project" to create one.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Project Name</th>
                    <th className="px-6 py-3">Category</th>
                    <th className="px-6 py-3">Client</th>
                    <th className="px-6 py-3">Featured</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id} className="border-b">
                      <td className="px-6 py-4 font-medium text-foreground">
                        {project.name}
                      </td>
                      <td className="px-6 py-4">{project.category}</td>
                      <td className="px-6 py-4">{project.clientName || '-'}</td>
                      <td className="px-6 py-4">
                        {project.isFeatured ? <Badge variant="default">Yes</Badge> : <Badge variant="secondary">No</Badge>}
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/portfolio/${project.id}/edit`}>
                            <Edit className="w-4 h-4 text-blue-500" />
                          </Link>
                        </Button>
                        <form action={deletePortfolio.bind(null, project.id)} className="inline-block">
                          <Button variant="ghost" size="icon" type="submit">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
