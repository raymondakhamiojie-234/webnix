import { Section } from "@/components/ui/section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "STARTER",
    description: "For individuals and small businesses.",
    price: "₦150,000",
    features: [
      "Custom 5-page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month free support"
    ],
    ctaText: "Request a Quote",
    isPopular: false
  },
  {
    name: "BUSINESS",
    description: "For growing businesses.",
    price: "₦350,000",
    features: [
      "Custom 10-page website",
      "Advanced SEO & Analytics",
      "Content Management System",
      "Social media integration",
      "Live Chat setup",
      "3 months free support"
    ],
    ctaText: "Request a Quote",
    isPopular: true
  },
  {
    name: "E-COMMERCE",
    description: "For businesses that want to sell online.",
    price: "₦650,000",
    features: [
      "Full Online Store setup",
      "Payment gateway integration",
      "Product upload (up to 50)",
      "Inventory management",
      "Customer accounts",
      "6 months free support"
    ],
    ctaText: "Request a Quote",
    isPopular: false
  }
]

export function PricingSection() {
  return (
    <Section id="pricing" className="bg-background">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Transparent Pricing</h2>
        <p className="text-lg text-muted-foreground">Choose the perfect package for your business needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <Card key={index} className={`relative flex flex-col ${pkg.isPopular ? 'border-primary shadow-xl scale-105' : 'border-border'}`}>
            {pkg.isPopular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Most Popular
              </div>
            )}
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
              <div className="mt-6 font-extrabold text-4xl text-foreground">
                {pkg.price}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant={pkg.isPopular ? "default" : "outline"} size="lg">
                <Link href="#contact">{pkg.ctaText}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center text-muted-foreground">
        Need a Custom Web Application? <Link href="#contact" className="text-primary font-bold hover:underline">Contact us for a custom quote</Link>.
      </div>
    </Section>
  )
}
