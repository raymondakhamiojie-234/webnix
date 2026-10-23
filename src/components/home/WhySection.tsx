import { Section } from "@/components/ui/section"
import { ShieldCheck, Zap, Smartphone, Search, Headphones, Award, Sparkles } from "lucide-react"

const reasons = [
  {
    title: "100% Bespoke Code Architecture",
    description: "Zero bloated drag-and-drop templates. We code from scratch using Next.js & TypeScript for unbeatable performance and maximum longevity.",
    icon: <Award className="w-6 h-6 text-primary" />,
    badge: "Enterprise Code"
  },
  {
    title: "Sub-Second Load Times",
    description: "Every millisecond counts. Our performance-tuned code reduces bounce rates and boosts your Quality Score on Google Ads campaigns.",
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    badge: "< 500ms Speed"
  },
  {
    title: "Mobile-First Conversion UX",
    description: "Over 75% of your Google Ads clicks come from smartphones. We engineer frictionless thumb-friendly navigation and lightning checkouts.",
    icon: <Smartphone className="w-6 h-6 text-secondary" />,
    badge: "100% Responsive"
  },
  {
    title: "Semantic Technical SEO",
    description: "Schema markup, dynamic OpenGraph meta, instant indexability, and clean crawl hierarchies built into every single page.",
    icon: <Search className="w-6 h-6 text-emerald-400" />,
    badge: "Top Google Rank"
  },
  {
    title: "Secure Admin Control Panel",
    description: "You retain 100% control over your website. Modify prices, projects, blogs, and leads with zero coding needed through your dedicated CMS.",
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
    badge: "Zero Vendor Lock-in"
  },
  {
    title: "Continuous Engineering Support",
    description: "We don't vanish after launch. Enjoy ongoing server maintenance, security patching, and prioritized emergency support.",
    icon: <Headphones className="w-6 h-6 text-rose-400" />,
    badge: "24/7 Availability"
  }
]

export function WhySection() {
  return (
    <Section className="relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Partners Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-foreground">
            The <span className="text-gradient">Webnix Engineering Advantage</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            We bridge the gap between creative visual artistry and deep full-stack engineering to build web systems that fuel scalable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bento-card p-8 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-muted/60 border border-border/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full border border-border/80 bg-muted/30 text-muted-foreground uppercase tracking-wider">
                    {reason.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-space text-foreground group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
