import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react"
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* HERO SECTION */}
        <Section className="relative overflow-hidden bg-accent/30 pt-24 pb-32">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
                  Your Website. <br/>
                  <span className="text-primary">Your Rules.</span>
                </h1>
                <p className="text-2xl font-semibold text-secondary">
                  We Just Make It HAPPEN.
                </p>
                <p className="text-lg text-muted-foreground max-w-xl">
                  Professional websites designed to help businesses build credibility, attract customers and grow online. From full-service web creation to expert 1-on-1 training.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                  <Link href="#contact">
                    Get Your Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="#portfolio">View Our Work</Link>
                </Button>
              </div>
              
              <div className="pt-4 flex items-center gap-4 text-sm font-medium text-muted-foreground">
                <Link 
                  href="https://wa.me/2340000000000?text=Hello%20Webnix,%20I%20found%20you%20on%20Google%20and%20I'm%20interested%20in%20getting%20a%20website%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat With Us on WhatsApp
                </Link>
              </div>
            </div>
            
            <div className="relative lg:h-[600px] flex justify-center items-center">
              <div className="w-full max-w-lg aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl border-8 border-white">
                <div className="absolute inset-0 bg-background/40 backdrop-blur-3xl" />
                <div className="relative z-10 text-center space-y-4 p-8">
                  <h3 className="text-2xl font-bold text-foreground">Premium Web Design</h3>
                  <div className="flex flex-col gap-2 text-left">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Conversion Focused</div>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Mobile Responsive</div>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> SEO Optimized</div>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground"><CheckCircle2 className="w-4 h-4 text-primary" /> Lightning Fast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

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
