import { Section } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Professional Custom Design",
    description: "No generic templates. We build unique experiences tailored perfectly to your brand identity."
  },
  {
    title: "Mobile Responsive",
    description: "Your website will look and function flawlessly on smartphones, tablets, and desktop computers."
  },
  {
    title: "Fast-Loading Websites",
    description: "Optimized performance ensures your visitors don't abandon ship due to slow load times."
  },
  {
    title: "SEO-Friendly Structure",
    description: "Built with search engines in mind so customers can easily find you on Google."
  },
  {
    title: "Business-Focused",
    description: "We don't just design pretty sites; we build platforms engineered to generate leads and sales."
  },
  {
    title: "Ongoing Support",
    description: "We don't disappear after launch. We offer continuous maintenance and priority support."
  }
]

export function WhySection() {
  return (
    <Section className="bg-primary text-primary-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Webnix?</h2>
          <p className="text-primary-foreground/80 text-lg">
            We combine technical expertise with deep business understanding to deliver websites that actually drive growth.
          </p>
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 shrink-0 text-secondary" />
              <div>
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-primary-foreground/70">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
