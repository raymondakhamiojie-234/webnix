import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Starter Launch",
    tier: "For early brands & personal professionals",
    price: "₦150,000",
    features: [
      "Custom 5-page conversion website",
      "Fully mobile-responsive layout",
      "Technical SEO & OpenGraph setup",
      "Contact & quote inquiry lead form",
      "WhatsApp live chat integration",
      "SSL certificate & domain setup",
      "1 month dedicated technical support"
    ],
    ctaText: "Choose Starter",
    isPopular: false
  },
  {
    name: "Business Growth",
    tier: "For scaling businesses & Google Ads campaigns",
    price: "₦350,000",
    features: [
      "Up to 10 bespoke high-impact pages",
      "Full Content Management System (CMS)",
      "Advanced Google Ads conversion tracking",
      "Speed optimized (< 0.5s loading time)",
      "Blog & resource publishing engine",
      "Social proof & review integration",
      "3 months priority engineering support"
    ],
    ctaText: "Scale Your Business",
    isPopular: true
  },
  {
    name: "Custom Enterprise",
    tier: "For e-commerce & complex web systems",
    price: "₦650,000+",
    features: [
      "Full-featured E-commerce or Custom App",
      "Multi-gateway checkout (Paystack, Stripe)",
      "Database models & authenticated dashboard",
      "Product & inventory management",
      "Automated email receipts & notifications",
      "Full API integrations & webhooks",
      "6 months priority 24/7 technical support"
    ],
    ctaText: "Build Enterprise",
    isPopular: false
  }
]

export function PricingSection() {
  return (
    <Section id="pricing" className="relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Tiers</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-foreground">
          Investment Plans That <span className="text-gradient">Drive ROI</span>
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Zero hidden fees. Transparent, fixed-price packages built to generate paying customers from day one.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className={`bento-card p-8 flex flex-col justify-between relative transition-all duration-300 ${
              pkg.isPopular 
                ? 'border-primary/60 shadow-[0_0_30px_rgba(217,70,239,0.2)] md:-translate-y-2' 
                : 'border-border/60'
            }`}
          >
            {pkg.isPopular && (
              <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Most Popular</span>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold font-space text-foreground">{pkg.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{pkg.tier}</p>
              </div>

              <div className="pt-2 pb-4 border-b border-border/50">
                <div className="text-4xl sm:text-5xl font-bold font-space text-foreground tracking-tight">
                  {pkg.price}
                </div>
                <span className="text-xs text-muted-foreground font-mono">One-time transparent investment</span>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 pt-2">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Button 
                asChild 
                className={`w-full rounded-full py-6 text-sm font-semibold transition-all duration-300 ${
                  pkg.isPopular 
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/45 border-none' 
                    : 'border-border/80 bg-card/60 hover:bg-card/90 text-foreground'
                }`}
                variant={pkg.isPopular ? "default" : "outline"}
              >
                <Link href="#contact" className="flex items-center justify-center gap-2">
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-muted-foreground">
        Need custom specifications or an enterprise system? {" "}
        <Link href="#contact" className="text-primary font-semibold hover:underline">
          Contact our engineers for a custom quote →
        </Link>
      </div>
    </Section>
  )
}
