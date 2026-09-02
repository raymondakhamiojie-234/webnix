"use client"
import { useState } from "react"
import { Section } from "@/components/ui/section"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What does a website cost?",
    answer: "Website costs vary depending on complexity, features, and the number of pages. Our starter packages begin at ₦150,000, but we provide custom quotes for larger web applications. Contact us to discuss your specific needs."
  },
  {
    question: "How long does it take to build a website?",
    answer: "A standard business website typically takes 2-4 weeks from concept to launch. E-commerce platforms and custom applications may take 6-12 weeks depending on the requirements."
  },
  {
    question: "Do you provide hosting and domain registration?",
    answer: "Yes! We offer complete packages that include premium hosting, domain name registration, and SSL certificates so you don't have to worry about the technical details."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely. We can take your current website and modernize it with a fresh design, better performance, and improved mobile responsiveness."
  },
  {
    question: "Do you maintain websites after launch?",
    answer: "Yes, we offer ongoing maintenance and support packages. We handle security updates, backups, and minor content updates so you can focus on running your business."
  },
  {
    question: "Do you offer web development training?",
    answer: "Yes, we offer personalized 1-on-1 web development training for individuals who want to learn how to build modern websites themselves."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section className="bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about our services.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-foreground hover:bg-accent/50 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <ChevronDown className={cn("w-5 h-5 text-primary transition-transform duration-200", openIndex === index && "rotate-180")} />
              </button>
              <div 
                className={cn(
                  "px-6 text-muted-foreground overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96 py-4 border-t border-border" : "max-h-0 py-0"
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
