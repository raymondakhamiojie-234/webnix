import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Tag, ImageIcon, MessageSquare, FileText } from "lucide-react"
import prisma from "@/lib/db"

export default async function AdminDashboard() {
  // Fetch high-level stats from the database
  // Note: these will fail to compile if Prisma types are missing, but we've generated them
  // For the moment, we will catch errors gracefully since the DB might not be seeded/migrated yet
  
  let stats = {
    leads: 0,
    services: 0,
    packages: 0,
    projects: 0,
    testimonials: 0,
    posts: 0
  }

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
  } catch (error) {
    console.error("Database connection failed for stats:", error)
    // We swallow the error to display the dashboard gracefully before the database is fully configured
  }

  const statCards = [
    { name: "Total Leads", value: stats.leads, icon: <Users className="w-8 h-8 text-blue-500" /> },
    { name: "Active Services", value: stats.services, icon: <Briefcase className="w-8 h-8 text-purple-500" /> },
    { name: "Pricing Packages", value: stats.packages, icon: <Tag className="w-8 h-8 text-green-500" /> },
    { name: "Portfolio Projects", value: stats.projects, icon: <ImageIcon className="w-8 h-8 text-pink-500" /> },
    { name: "Testimonials", value: stats.testimonials, icon: <MessageSquare className="w-8 h-8 text-orange-500" /> },
    { name: "Blog Posts", value: stats.posts, icon: <FileText className="w-8 h-8 text-teal-500" /> },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground text-center py-8">
              No recent leads.
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground text-center py-8">
              No recent projects.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
