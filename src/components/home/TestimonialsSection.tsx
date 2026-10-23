import { Section } from "@/components/ui/section"
import { Star, MessageSquareQuote, CheckCircle2 } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Founder, TechFlow Innovations",
    content: "Webnix completely transformed our online presence. Our previous website was converting at under 1%. The new Next.js platform doubled our inquiries in the first 30 days of our Google Ads campaign.",
    rating: 5,
    metrics: "+150% Leads"
  },
  {
    name: "Michael Adebayo",
    company: "Operations Director, Lagos Retail Hub",
    content: "The level of engineering precision and rapid turnaround was extraordinary. They understood our complex inventory and payment gateway requirements and delivered on schedule without a hitch.",
    rating: 5,
    metrics: "100% Reliable"
  },
  {
    name: "Elena Rodriguez",
    company: "Lead Partner, Horizon Creative Studio",
    content: "As a design agency, our visual and speed standards are uncompromising. Webnix blew us away. The animations, sub-second load times, and custom CMS allow us to manage everything effortlessly.",
    rating: 5,
    metrics: "0.4s Fast"
  }
]

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          <span>Client Proof</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-foreground">
          Trusted By <span className="text-gradient">Ambitious Businesses</span>
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Real results from founders, directors, and creators who partnered with Webnix to scale online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div 
            key={index} 
            className="bento-card p-8 flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  {t.metrics}
                </span>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed italic">
                "{t.content}"
              </p>
            </div>

            <div className="pt-6 border-t border-border/50 flex items-center justify-between mt-6">
              <div>
                <div className="font-bold text-foreground font-space text-base">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </div>
              <CheckCircle2 className="w-5 h-5 text-primary/80" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
