import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechFlow Innovations",
    content: "Webnix completely transformed our online presence. The new website is not only beautiful but has increased our lead generation by 150% in just two months.",
    rating: 5
  },
  {
    name: "Michael Adebayo",
    company: "Lagos Retail Co.",
    content: "The level of professionalism and speed of delivery was outstanding. They understood exactly what my e-commerce store needed and executed it flawlessly.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    company: "Creative Studio",
    content: "As a design agency, we have high standards for our own website. Webnix met and exceeded them. Their attention to detail and modern aesthetic is top-tier.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-muted">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Client Success Stories</h2>
        <p className="text-lg text-muted-foreground">Don't just take our word for it. Here's what our clients have to say.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-border">
            <CardContent className="p-8 space-y-6">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              <div>
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-primary">{testimonial.company}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
