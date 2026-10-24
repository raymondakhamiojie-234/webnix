import { Users, Briefcase, Tag, ImageIcon, MessageSquare, FileText, ArrowUpRight, TrendingUp, Sparkles, Plus, ExternalLink } from "lucide-react"
import prisma from "@/lib/db"
import Link from "next/link"

export default async function AdminDashboard() {
  let stats = {
    leads: 0,
    services: 0,
    packages: 0,
    projects: 0,
    testimonials: 0,
    posts: 0
  }

  let recentLeads: any[] = []
  let recentProjects: any[] = []

  try {
    const [leads, services, packages, projects, testimonials, posts] = await Promise.all([
      prisma.lead.count(),
      prisma.service.count(),
      prisma.pricingPackage.count(),
      prisma.portfolioProject.count(),
      prisma.testimonial.count(),
      prisma.blogPost.count()
    ])
    stats = { leads, services, packages, projects, testimonials, posts }

    const [leadsData, projectsData] = await Promise.all([
      prisma.lead.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.portfolioProject.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' }
      })
    ])
    recentLeads = leadsData
    recentProjects = projectsData
  } catch (error) {
    console.error("Database connection failed for stats:", error)
  }

  const statCards = [
    { name: "Inbound Leads", value: stats.leads, icon: <Users className="w-5 h-5 text-blue-400" />, href: "/admin/leads", badge: "Live CRM" },
    { name: "Services Catalog", value: stats.services, icon: <Briefcase className="w-5 h-5 text-purple-400" />, href: "/admin/services", badge: "Offerings" },
    { name: "Pricing Packages", value: stats.packages, icon: <Tag className="w-5 h-5 text-emerald-400" />, href: "/admin/pricing", badge: "Tiers" },
    { name: "Portfolio Works", value: stats.projects, icon: <ImageIcon className="w-5 h-5 text-pink-400" />, href: "/admin/portfolio", badge: "Showcases" },
    { name: "Testimonials", value: stats.testimonials, icon: <MessageSquare className="w-5 h-5 text-amber-400" />, href: "/admin/testimonials", badge: "Reviews" },
    { name: "Blog Posts", value: stats.posts, icon: <FileText className="w-5 h-5 text-teal-400" />, href: "/admin/blog", badge: "Articles" },
  ]

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-[11px] font-mono uppercase tracking-widest text-primary">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Overview</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-space text-foreground tracking-tight">
            Admin <span className="text-gradient">Command Center</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/portfolio/new"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Project</span>
          </Link>
          <Link
            href="/admin/leads"
            className="px-4 py-2 rounded-xl border border-border/70 bg-card/60 hover:bg-card/90 text-foreground text-xs font-semibold transition-all flex items-center gap-1.5"
          >
            <span>Review Leads ({stats.leads})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
      
      {/* Bento Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, i) => (
          <Link 
            key={i} 
            href={stat.href} 
            className="bento-card p-6 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {stat.name}
              </span>
              <div className="w-10 h-10 rounded-xl bg-muted/60 border border-border/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
            </div>

            <div className="pt-4 flex items-baseline justify-between">
              <div className="text-4xl font-bold font-space text-foreground tracking-tight">
                {stat.value}
              </div>
              <span className="text-xs font-mono text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Manage</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Leads & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Inquiries Table (8 cols) */}
        <div className="lg:col-span-8 bento-card p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-border/40">
            <h3 className="text-lg font-bold font-space text-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span>Recent Inbound Leads</span>
            </h3>
            <Link href="/admin/leads" className="text-xs font-mono text-primary hover:underline">
              View All ({stats.leads})
            </Link>
          </div>

          {recentLeads.length === 0 ? (
            <div className="py-10 text-center text-sm text-muted-foreground font-mono">
              No inquiries submitted yet. Forms submitted on the landing page will instantly appear here.
            </div>
          ) : (
            <div className="divide-y divide-border/40">
              {recentLeads.map((lead) => (
                <div key={lead.id} className="py-3 flex items-center justify-between text-sm">
                  <div>
                    <div className="font-semibold text-foreground">{lead.fullName}</div>
                    <div className="text-xs text-muted-foreground">{lead.email} • {lead.phone}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                      {lead.websiteType || "General Quote"}
                    </span>
                    <div className="text-[11px] text-muted-foreground mt-0.5">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Launchpad (4 cols) */}
        <div className="lg:col-span-4 bento-card p-6 space-y-4">
          <h3 className="text-lg font-bold font-space text-foreground flex items-center gap-2 pb-2 border-b border-border/40">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span>Quick Launchpad</span>
          </h3>

          <div className="space-y-2.5">
            <Link 
              href="/admin/portfolio/new" 
              className="flex items-center justify-between p-3 rounded-xl bg-muted/40 hover:bg-primary/10 hover:border-primary/30 border border-border/50 text-xs font-mono text-foreground transition-all"
            >
              <span>+ Upload Portfolio Work</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
            </Link>

            <Link 
              href="/admin/services/new" 
              className="flex items-center justify-between p-3 rounded-xl bg-muted/40 hover:bg-primary/10 hover:border-primary/30 border border-border/50 text-xs font-mono text-foreground transition-all"
            >
              <span>+ Create New Service</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
            </Link>

            <Link 
              href="/admin/pricing/new" 
              className="flex items-center justify-between p-3 rounded-xl bg-muted/40 hover:bg-primary/10 hover:border-primary/30 border border-border/50 text-xs font-mono text-foreground transition-all"
            >
              <span>+ Add Pricing Tier</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
            </Link>

            <Link 
              href="/admin/blog/new" 
              className="flex items-center justify-between p-3 rounded-xl bg-muted/40 hover:bg-primary/10 hover:border-primary/30 border border-border/50 text-xs font-mono text-foreground transition-all"
            >
              <span>+ Publish New Article</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
            </Link>

            <Link 
              href="/admin/settings" 
              className="flex items-center justify-between p-3 rounded-xl bg-muted/40 hover:bg-secondary/10 hover:border-secondary/30 border border-border/50 text-xs font-mono text-foreground transition-all"
            >
              <span>⚙ Update Global SEO & Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>

      {/* Portfolio Works on the Dashboard */}
      <div className="bento-card p-6 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-border/40">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-pink-400" />
            <h3 className="text-lg font-bold font-space text-foreground">
              Uploaded Portfolio Works ({stats.projects})
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <Link 
              href="/admin/portfolio/new" 
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add New</span>
            </Link>
            <Link href="/admin/portfolio" className="text-xs font-mono text-muted-foreground hover:text-foreground">
              View All ({stats.projects}) →
            </Link>
          </div>
        </div>

        {recentProjects.length === 0 ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-muted/60 border border-border/60 flex items-center justify-center mx-auto text-muted-foreground">
              <ImageIcon className="w-6 h-6" />
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              No portfolio projects uploaded yet.
            </p>
            <Link 
              href="/admin/portfolio/new" 
              className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:underline"
            >
              Upload your first project now →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {recentProjects.map((project) => (
              <div 
                key={project.id} 
                className="p-4 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/40 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                    {project.isFeatured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Featured
                      </span>
                    )}
                  </div>
                  <h4 className="font-bold text-foreground font-space text-base mt-1">
                    {project.name}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-1 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/40 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-mono text-[11px]">
                    {project.clientName ? `Client: ${project.clientName}` : 'Live'}
                  </span>
                  <Link 
                    href={`/admin/portfolio/${project.id}/edit`}
                    className="font-mono text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Edit</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
