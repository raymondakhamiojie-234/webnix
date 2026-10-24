import prisma from "@/lib/db"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Plus, Edit, Trash2, ExternalLink, ImageIcon, Sparkles } from "lucide-react"
import { deletePortfolio } from "./actions"

export default async function PortfolioPage() {
  let projects: any[] = []
  
  try {
    projects = await prisma.portfolioProject.findMany({
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error("Database connection failed for portfolio projects:", error)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-[11px] font-mono uppercase tracking-widest text-pink-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase Manager</span>
          </div>
          <h1 className="text-3xl font-bold font-space text-foreground tracking-tight">Portfolio Projects</h1>
        </div>
        <Button 
          asChild
          className="rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-xs shadow-md shadow-primary/20"
        >
          <Link href="/admin/portfolio/new"><Plus className="w-4 h-4 mr-1.5" /> Add New Project</Link>
        </Button>
      </div>

      <div className="bento-card p-6">
        {projects.length === 0 ? (
          <div className="text-center py-16 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-muted/60 border border-border/60 flex items-center justify-center mx-auto text-muted-foreground">
              <ImageIcon className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold font-space text-foreground">No Projects Yet</h3>
              <p className="text-xs font-mono text-muted-foreground">Click "Add New Project" above to create your first portfolio showcase.</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs font-mono text-muted-foreground uppercase bg-muted/30 border-b border-border/40">
                <tr>
                  <th className="px-6 py-3.5">Preview / Project</th>
                  <th className="px-6 py-3.5">Category</th>
                  <th className="px-6 py-3.5">Client</th>
                  <th className="px-6 py-3.5">Featured</th>
                  <th className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {project.featuredImg ? (
                          <div className="relative w-12 h-10 rounded-lg overflow-hidden border border-border/60 shrink-0">
                            <Image 
                              src={project.featuredImg} 
                              alt={project.name} 
                              fill 
                              className="object-cover" 
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-10 rounded-lg bg-muted/60 border border-border/60 flex items-center justify-center text-muted-foreground shrink-0">
                            <ImageIcon className="w-5 h-5 text-primary" />
                          </div>
                        )}
                        <div>
                          <div className="font-bold text-foreground font-space text-base">
                            {project.name}
                          </div>
                          <div className="text-xs text-muted-foreground line-clamp-1 max-w-xs">
                            {project.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-muted/60 border border-border/50 text-foreground">
                        {project.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono text-xs text-muted-foreground">
                      {project.clientName || '—'}
                    </td>
                    <td className="px-6 py-4">
                      {project.isFeatured ? (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Yes
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                          No
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary rounded-xl" asChild>
                        <Link href={`/admin/portfolio/${project.id}/edit`}>
                          <Edit className="w-4 h-4" />
                        </Link>
                      </Button>
                      <form action={deletePortfolio.bind(null, project.id)} className="inline-block">
                        <Button variant="ghost" size="icon" className="hover:bg-rose-500/10 hover:text-rose-400 rounded-xl" type="submit">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
