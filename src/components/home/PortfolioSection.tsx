import { Section } from "@/components/ui/section"
import { ExternalLink, Sparkles, Laptop, Layers } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    name: "Apex Luxury Real Estate",
    category: "Corporate Web App",
    description: "High-ticket property acquisition platform featuring interactive virtual tours, mortgage calculators, and automated lead routing.",
    gradient: "from-purple-900/50 via-slate-900 to-slate-950",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    stats: "+240% Lead Rate",
  },
  {
    name: "Nova Fashion Boutique",
    category: "E-Commerce",
    description: "Omnichannel online retail shop with instantaneous search, multi-currency support, Paystack & Stripe gateway integrations.",
    gradient: "from-pink-900/50 via-slate-900 to-slate-950",
    tags: ["E-Commerce", "Stripe API", "Paystack", "Inventory CMS"],
    stats: "0.4s Fast Checkout",
  },
  {
    name: "FinPulse Analytics SaaS",
    category: "Custom Dashboard",
    description: "Comprehensive financial metrics and data visualization web application built for B2B financial consulting teams.",
    gradient: "from-blue-900/50 via-slate-900 to-slate-950",
    tags: ["React 19", "Recharts", "Prisma ORM", "Auth.js"],
    stats: "Realtime Analytics",
  },
  {
    name: "Zest Culinary & Bistro",
    category: "Hospitality & Booking",
    description: "Multi-location restaurant booking and online ordering experience with interactive seasonal menu animations.",
    gradient: "from-amber-900/40 via-slate-900 to-slate-950",
    tags: ["Framer Motion", "Table Reservations", "SEO"],
    stats: "Top #1 Google Rank",
  },
  {
    name: "OmniHealth Medical Center",
    category: "Healthcare Portal",
    description: "HIPAA-conscious patient appointment scheduler and medical directory with automated WhatsApp and SMS reminders.",
    gradient: "from-emerald-900/40 via-slate-900 to-slate-950",
    tags: ["Telehealth API", "Twilio", "Next.js 16"],
    stats: "15k Monthly Visits",
  },
  {
    name: "Nexus Venture Studio",
    category: "Portfolio & Brand",
    description: "Ultra-sleek portfolio site showcasing early-stage venture investments with custom micro-interactions and dark mode elegance.",
    gradient: "from-fuchsia-900/40 via-slate-900 to-slate-950",
    tags: ["3D Interactive", "Tailwind", "NextAuth"],
    stats: "Featured Design",
  }
]

export function PortfolioSection() {
  return (
    <Section id="portfolio" className="relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-xs font-semibold uppercase tracking-widest text-secondary backdrop-blur-md">
          <Layers className="w-3.5 h-3.5" />
          <span>Proven Delivery</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-foreground">
          Selected <span className="text-gradient">Client Showcases</span>
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Explore a selection of high-performance websites and custom digital platforms we've deployed for our partners worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group bento-card flex flex-col justify-between overflow-hidden transition-all duration-300"
          >
            {/* Visual Device / Browser Mockup Area */}
            <div className={`aspect-[16/10] w-full bg-gradient-to-br ${project.gradient} p-6 relative flex flex-col justify-between overflow-hidden border-b border-border/60`}>
              {/* Browser bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                </div>
                <span className="text-[10px] font-mono text-white/50 bg-black/40 px-2 py-0.5 rounded-md">
                  https://preview.webnix.dev
                </span>
              </div>

              {/* Center graphic highlight */}
              <div className="text-center py-4">
                <h4 className="text-xl font-bold text-white tracking-tight font-space group-hover:scale-105 transition-transform duration-300">
                  {project.name}
                </h4>
                <span className="inline-block mt-2 text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur-md border border-white/20">
                  {project.stats}
                </span>
              </div>

              {/* Bottom mockup bar */}
              <div className="h-1.5 w-1/3 mx-auto rounded-full bg-white/20" />
            </div>

            {/* Content Details */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, tIndex) => (
                    <span key={tIndex} className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/40">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link 
                  href="#contact" 
                  className="p-2 rounded-xl bg-muted/80 hover:bg-primary hover:text-white text-muted-foreground transition-all duration-200 group-hover:scale-110"
                  title="Discuss similar project"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
