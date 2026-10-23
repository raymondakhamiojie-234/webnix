import { Section } from "@/components/ui/section"
import { Compass, Palette, Terminal, Rocket, Sparkles } from "lucide-react"

const processes = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your customer journey, conversion funnels, brand targets, and Google Ads metrics.",
    icon: <Compass className="w-5 h-5 text-primary" />
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "High-fidelity interactive prototypes tailored with modern typography, dark/light themes, and conversion triggers.",
    icon: <Palette className="w-5 h-5 text-secondary" />
  },
  {
    step: "03",
    title: "Full-Stack Engineering",
    description: "Clean Next.js & TypeScript development backed by robust database integration, security layers, and speed audits.",
    icon: <Terminal className="w-5 h-5 text-purple-400" />
  },
  {
    step: "04",
    title: "Launch & Analytics",
    description: "Rigorous QA testing, domain/SSL rollout, Google Analytics/Pixel configuration, and full CMS handover.",
    icon: <Rocket className="w-5 h-5 text-emerald-400" />
  }
]

export function ProcessSection() {
  return (
    <Section id="process" className="relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-xs font-semibold uppercase tracking-widest text-secondary backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Execution Roadmap</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-foreground">
          How We Bring <span className="text-gradient">Your Vision Live</span>
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A seamless, transparent 4-stage engineering sprint to get your high-performing platform deployed in record time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processes.map((process, index) => (
          <div 
            key={index} 
            className="bento-card p-8 flex flex-col justify-between group hover:border-secondary/50 transition-all duration-300 relative"
          >
            {/* Step Number with ambient glow */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-4xl font-bold font-space tracking-tighter text-muted-foreground/40 group-hover:text-primary transition-colors">
                {process.step}
              </span>
              <div className="w-10 h-10 rounded-xl bg-muted/60 border border-border/60 flex items-center justify-center">
                {process.icon}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold font-space text-foreground group-hover:text-secondary transition-colors">
                {process.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {process.description}
              </p>
            </div>

            {/* Bottom mini indicator */}
            <div className="mt-8 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground font-mono">
              <span>Phase {index + 1}</span>
              <span className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
