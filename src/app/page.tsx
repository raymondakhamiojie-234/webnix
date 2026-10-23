import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Zap, ShieldCheck, TrendingUp, Terminal, Laptop } from "lucide-react"
import Link from "next/link"

import { ServicesSection } from "@/components/home/ServicesSection"
import { PortfolioSection } from "@/components/home/PortfolioSection"
import { WhySection } from "@/components/home/WhySection"
import { ProcessSection } from "@/components/home/ProcessSection"
import { PricingSection } from "@/components/home/PricingSection"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { FaqSection } from "@/components/home/FaqSection"
import { LeadForm } from "@/components/home/LeadForm"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col cyber-grid relative selection:bg-primary/30 selection:text-white">
      {/* Ambient background glowing blobs like tech-summit */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[140px] animate-blob" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-secondary/15 blur-[150px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[160px] animate-blob animation-delay-4000" />
      </div>

      <Navbar />
      
      <main className="flex-1 relative z-10 pt-20">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
              {/* Pill Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur-md w-fit shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground font-space">
                  Accepting High-Growth Projects
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-bold">
                  2026 Ready
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.08] font-space">
                  Building The Next <br />
                  <span className="text-gradient">Generation Of High-Impact</span> <br />
                  Web Solutions.
                </h1>
                
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal">
                  Your Website. <span className="text-foreground font-semibold">Your Rules.</span> We craft lightning-fast web applications, e-commerce platforms, and conversion-focused systems engineered to turn Google Ads visitors into paying clients.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_25px_rgba(217,70,239,0.35)] hover:shadow-[0_0_35px_rgba(217,70,239,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-none group" 
                  asChild
                >
                  <Link href="#contact" className="flex items-center justify-center gap-2">
                    <span>Claim Your Free Strategy Call</span> 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full px-7 py-6 text-base font-medium border-border/80 bg-card/40 backdrop-blur-md hover:bg-card/80 hover:border-primary/50 transition-all duration-300" 
                  asChild
                >
                  <Link href="#portfolio" className="flex items-center justify-center gap-2">
                    <Laptop className="w-4 h-4 text-primary" />
                    <span>Explore Showcase</span>
                  </Link>
                </Button>
              </div>

              {/* WhatsApp Quick CTA */}
              <div className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
                <Link 
                  href="https://wa.me/2340000000000?text=Hello%20Webnix,%20I'm%20interested%20in%20building%20a%20modern%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-medium transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span>Instant WhatsApp Chat Available (Reply within 15 mins)</span>
                </Link>
              </div>
            </div>

            {/* Right Tech Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative glow ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
                
                {/* Tech Terminal Card */}
                <div className="relative bento-card p-6 sm:p-8 space-y-6">
                  {/* Top Window Control Dots */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      webnix_core.ts
                    </span>
                  </div>

                  {/* Code snippet display */}
                  <div className="font-mono text-xs text-muted-foreground space-y-1.5 bg-muted/40 p-4 rounded-xl border border-border/40">
                    <p className="text-primary font-semibold">// Initializing High-Converting Architecture</p>
                    <p><span className="text-purple-400">const</span> stack = [<span className="text-emerald-400">'Next.js'</span>, <span className="text-emerald-400">'TypeScript'</span>, <span className="text-emerald-400">'Tailwind'</span>];</p>
                    <p><span className="text-blue-400">await</span> optimizeForConversion({'{'}</p>
                    <p className="pl-4">speed: <span className="text-amber-400">'99.9%'</span>,</p>
                    <p className="pl-4">seo: <span className="text-amber-400">'Top 3 Google Ranking'</span>,</p>
                    <p className="pl-4">adsOptimization: <span className="text-emerald-400">true</span></p>
                    <p>{'}'});</p>
                  </div>

                  {/* Metric Badges Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3.5 rounded-2xl border border-border/60 bg-muted/30">
                      <div className="text-2xl font-bold text-foreground font-space flex items-center gap-1">
                        99.8% <TrendingUp className="w-4 h-4 text-emerald-500" />
                      </div>
                      <div className="text-xs text-muted-foreground">Lighthouse Speed Score</div>
                    </div>

                    <div className="p-3.5 rounded-2xl border border-border/60 bg-muted/30">
                      <div className="text-2xl font-bold text-foreground font-space flex items-center gap-1">
                        3.2x <Zap className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-xs text-muted-foreground">Average Lead Increase</div>
                    </div>
                  </div>

                  {/* Bottom Trust Row */}
                  <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border/50">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> SSL Enterprise Grade</span>
                    <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-secondary" /> 100% Custom Built</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Social Proof Stats Banner */}
          <div className="mt-16 sm:mt-24 pt-8 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-space text-foreground tracking-tight">100+</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Websites Delivered</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-space text-foreground tracking-tight">99.8%</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-space text-foreground tracking-tight">&lt; 0.5s</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Average Load Time</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-bold font-space text-foreground tracking-tight">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">Dedicated CMS & Support</div>
            </div>
          </div>
        </section>

        {/* SECTION COMPONENTS */}
        <ServicesSection />
        <PortfolioSection />
        <WhySection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <LeadForm />
        
      </main>

      <Footer />
    </div>
  )
}
