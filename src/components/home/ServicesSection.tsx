import { Section } from "@/components/ui/section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, ShoppingCart, Briefcase, User, Code, GraduationCap } from "lucide-react"

const services = [
  {
    title: "Business Websites",
    description: "Professional websites for businesses that want to establish a strong online presence.",
    icon: <Briefcase className="w-10 h-10 text-primary" />
  },
  {
    title: "E-commerce Websites",
    description: "Online stores designed for businesses that want to sell products online.",
    icon: <ShoppingCart className="w-10 h-10 text-primary" />
  },
  {
    title: "Corporate Websites",
    description: "Professional websites for companies, organizations and institutions.",
    icon: <Monitor className="w-10 h-10 text-primary" />
  },
  {
    title: "Portfolio & Personal",
    description: "Modern websites for professionals, creatives and personal brands.",
    icon: <User className="w-10 h-10 text-primary" />
  },
  {
    title: "Custom Web Applications",
    description: "Custom web systems built around specific business requirements.",
    icon: <Code className="w-10 h-10 text-primary" />
  },
  {
    title: "1-on-1 Web Training",
    description: "Personalized training for people who want to learn web development.",
    icon: <GraduationCap className="w-10 h-10 text-primary" />
  }
]

export function ServicesSection() {
  return (
    <Section id="services" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
        <p className="text-lg text-muted-foreground">We provide everything you need to establish and grow your online presence.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="border-border hover:shadow-lg transition-shadow bg-accent/10 border-none">
            <CardHeader>
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-muted-foreground">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
