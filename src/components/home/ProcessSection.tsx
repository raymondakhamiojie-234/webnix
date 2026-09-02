import { Section } from "@/components/ui/section"

const processes = [
  {
    step: "01",
    title: "Consultation",
    description: "We discuss your goals, target audience, and specific requirements to plan the perfect website for your business."
  },
  {
    step: "02",
    title: "Design",
    description: "Our team creates modern, high-converting visual designs tailored to your brand identity."
  },
  {
    step: "03",
    title: "Development",
    description: "We build your website using modern technologies, ensuring it is fast, secure, and mobile-responsive."
  },
  {
    step: "04",
    title: "Launch",
    description: "After thorough testing, we launch your website and provide you with the tools to manage it easily."
  }
]

export function ProcessSection() {
  return (
    <Section id="process" className="bg-muted">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">How We Work</h2>
        <p className="text-lg text-muted-foreground">A simple, transparent process to get your website live quickly and professionally.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processes.map((process, index) => (
          <div key={index} className="flex flex-col space-y-4 relative group">
            <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              {process.step}
            </div>
            <h3 className="text-xl font-bold text-foreground">{process.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {process.description}
            </p>
            {/* Connecting line for desktop */}
            {index < processes.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[4.5rem] right-[-2rem] h-[2px] bg-border border-dashed border-t-2" />
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
