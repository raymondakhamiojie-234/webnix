import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    name: "Luxury Real Estate",
    category: "Corporate",
    image: "bg-gradient-to-br from-gray-800 to-gray-900", // Placeholder for actual image
  },
  {
    name: "Fashion Boutique",
    category: "E-commerce",
    image: "bg-gradient-to-br from-pink-500 to-rose-500",
  },
  {
    name: "Tech Startup",
    category: "Web Application",
    image: "bg-gradient-to-br from-blue-600 to-indigo-700",
  },
  {
    name: "Local Restaurant",
    category: "Business",
    image: "bg-gradient-to-br from-orange-400 to-amber-600",
  },
  {
    name: "Creative Agency",
    category: "Portfolio",
    image: "bg-gradient-to-br from-purple-500 to-indigo-500",
  },
  {
    name: "Health Clinic",
    category: "Business",
    image: "bg-gradient-to-br from-teal-400 to-emerald-600",
  }
]

export function PortfolioSection() {
  return (
    <Section id="portfolio" className="bg-muted">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Work</h2>
        <p className="text-lg text-muted-foreground">Take a look at some of the stunning websites we've built for our clients.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl border border-border bg-background shadow-sm hover:shadow-md transition-all">
            <div className={`aspect-video w-full ${project.image} flex items-center justify-center text-white/50 text-sm`}>
              Project Image Preview
            </div>
            <div className="p-6">
              <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
              <h3 className="text-xl font-bold text-foreground mb-4">{project.name}</h3>
              <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                View Project <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
