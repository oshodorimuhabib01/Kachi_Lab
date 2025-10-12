import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Trophy,
  Activity,
  Globe,
  CreditCard,
  Calculator,
  Shield,
  ShoppingBag,
  Truck,
  Car,
  ArrowRight,
} from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: Trophy,
      name: "FOOT NFTs",
      description: "Web3 fan engagement platform revolutionizing football fandom",
      color: "text-chart-1",
    },
    {
      icon: Activity,
      name: "Predict-Pro",
      description: "AI-powered healthcare diagnostics and prediction system",
      color: "text-chart-2",
    },
    {
      icon: Globe,
      name: "Vold-Verse",
      description: "Immersive blockchain-powered metaverse experience",
      color: "text-chart-3",
    },
    {
      icon: CreditCard,
      name: "OMI-Pay",
      description: "Seamless cross-border payment solutions for Africa",
      color: "text-chart-4",
    },
    {
      icon: Calculator,
      name: "Tax-Zen",
      description: "AI tax assistant simplifying compliance and filing",
      color: "text-chart-5",
    },
    {
      icon: Shield,
      name: "GenuScan",
      description: "Advanced product authentication and anti-counterfeit tech",
      color: "text-chart-1",
    },
    {
      icon: ShoppingBag,
      name: "Pan-African Marketspace",
      description: "Unified e-commerce hub connecting African businesses",
      color: "text-chart-2",
    },
    {
      icon: Truck,
      name: "Cargo-Cloud",
      description: "Smart logistics and fleet management platform",
      color: "text-chart-3",
    },
    {
      icon: Car,
      name: "CarSec",
      description: "Blockchain-based vehicle document verification system",
      color: "text-chart-4",
    },
  ]

  return (
    <section id="products" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
            Our Innovation <span className="text-primary">Portfolio</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Cutting-edge solutions transforming industries across Africa and beyond
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <CardHeader>
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${product.color}`}
                >
                  <product.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-card-foreground">{product.name}</CardTitle>
                <CardDescription className="text-pretty leading-relaxed">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="group/btn w-full justify-between text-primary hover:bg-primary/10 hover:text-primary"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
