"use client"
import { useState } from "react"
import { Section } from "@/components/ui/section"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How long does it take to design and launch my website?",
    answer: "A standard business website typically takes 2 to 3 weeks from discovery to deployment. Complex e-commerce stores or custom web applications with database integrations typically take 4 to 6 weeks. We provide clear milestone updates throughout."
  },
  {
    question: "Can I easily update content myself without knowing how to code?",
    answer: "Yes, 100%! Every website we deliver comes with your dedicated, password-protected Webnix Admin Dashboard. You can easily add new portfolio projects, publish blogs, modify service offerings, and review incoming sales leads anytime."
  },
  {
    question: "Will the website be optimized to generate sales from Google Ads?",
    answer: "Absolutely. We specifically engineer our platforms with clear conversion hierarchies, prominent WhatsApp/call triggers, sub-second load times, and clean landing page funnels that maximize your Google Ads Quality Score and ROAS."
  },
  {
    question: "Do you handle domain names, hosting, and SSL certificates?",
    answer: "Yes. We configure enterprise-grade hosting (with 99.9% uptime on global edge networks), domain DNS mapping, and automated SSL encryption certificates as part of our launch protocol."
  },
  {
    question: "How does the 1-on-1 Web Development training work?",
    answer: "Our mentorship is tailored around your current technical level. You learn directly via live weekly screenshare sessions covering React, TypeScript, Next.js, and backend databases, building actual real-world projects rather than theoretical toy tutorials."
  },
  {
    question: "Can you redesign or upgrade my existing slow website?",
    answer: "Yes. We regularly migrate businesses from slow, outdated WordPress or Wix templates to modern, ultra-fast Next.js architecture while preserving and improving existing Google search rankings."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" className="relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-xs font-semibold uppercase tracking-widest text-secondary backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about partnering with Webnix for your digital presence.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bento-card overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left font-semibold text-foreground hover:text-primary transition-colors focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-base sm:text-lg font-space pr-4">{faq.question}</span>
                <div className={cn("w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 transition-transform duration-300", openIndex === index && "rotate-180 bg-primary/10 border-primary/30")}>
                  <ChevronDown className={cn("w-4 h-4 text-muted-foreground", openIndex === index && "text-primary")} />
                </div>
              </button>
              
              <div 
                className={cn(
                  "px-6 sm:px-8 text-muted-foreground text-sm sm:text-base leading-relaxed overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96 pb-6 pt-1 border-t border-border/40" : "max-h-0 py-0"
                )}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
