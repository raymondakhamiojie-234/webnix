import { Section } from "@/components/ui/section"
import { Monitor, ShoppingCart, Briefcase, Code, GraduationCap, Sparkles, ArrowUpRight, Zap, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  return (
    <Section id="services" className="relative z-10">
      {/* Section Header with Tech-Summit Pill */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-foreground">
          Engineered For <span className="text-gradient">Performance & Growth</span>
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          From full-service bespoke website development to expert 1-on-1 engineering training, we build digital systems that convert visitors into revenue.
        </p>
      </div>
      
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bento 1: Custom Web Apps (Span 2) */}
        <div className="md:col-span-2 bento-card p-8 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-border/80 bg-muted/40 uppercase tracking-widest text-muted-foreground">
                High-Load Systems
              </span>
            </div>
            
            <h3 className="text-2xl font-bold font-space text-foreground group-hover:text-primary transition-colors">
              Custom Web Applications & Portals
            </h3>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
              Scalable, database-driven web platforms tailored around your exact business logic. Built with Next.js, TypeScript, PostgreSQL, and secure authenticated dashboard workflows.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
              <span className="px-2.5 py-1 rounded-md bg-muted/60 border border-border/50">Next.js 16</span>
              <span className="px-2.5 py-1 rounded-md bg-muted/60 border border-border/50">TypeScript</span>
              <span className="px-2.5 py-1 rounded-md bg-muted/60 border border-border/50">PostgreSQL</span>
              <span className="px-2.5 py-1 rounded-md bg-muted/60 border border-border/50">Tailwind CSS</span>
            </div>

            <Link href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors">
              Request Spec <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bento 2: E-Commerce Websites */}
        <div className="bento-card p-8 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 border border-secondary/30 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-border/80 bg-muted/40 uppercase tracking-widest text-muted-foreground">
                High Conversion
              </span>
            </div>

            <h3 className="text-xl font-bold font-space text-foreground group-hover:text-secondary transition-colors">
              E-Commerce Stores
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Frictionless online shopping experiences with payment gateways, automated inventory, and instant checkout flows designed to maximize cart value.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Stripe, Paystack, PayPal</span>
            <Link href="#contact" className="text-secondary hover:text-primary transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bento 3: Business & Corporate Sites */}
        <div className="bento-card p-8 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-border/80 bg-muted/40 uppercase tracking-widest text-muted-foreground">
                Authority
              </span>
            </div>

            <h3 className="text-xl font-bold font-space text-foreground group-hover:text-primary transition-colors">
              Corporate & Lead Sites
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Showcase your brand authority, educate decision-makers, and capture qualified inbound sales leads with landing page architecture optimized for Google Ads.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Google Ads Optimized</span>
            <Link href="#contact" className="text-primary hover:text-secondary transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bento 4: 1-on-1 Web Development Mentorship (Span 2) */}
        <div className="md:col-span-2 bento-card p-8 flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 border border-secondary/30 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 uppercase tracking-widest font-semibold">
                Live Mentorship
              </span>
            </div>

            <h3 className="text-2xl font-bold font-space text-foreground group-hover:text-secondary transition-colors">
              1-on-1 Web Engineering & Career Mentorship
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl">
              Want to build modern platforms yourself? Get personalized, hands-on coaching directly with an experienced engineer. Master React, TypeScript, Next.js, backend databases, and real-world deployment.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Weekly 1-on-1 Calls</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Code Reviews</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Real Client Projects</span>
            </div>

            <Link href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-primary transition-colors">
              Apply For Training <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </Section>
  )
}
