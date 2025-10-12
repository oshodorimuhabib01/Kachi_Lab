import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, TrendingUp } from "lucide-react"

export function CTASection() {
  return (
    <section id="join" className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary/50 bg-gradient-to-br from-primary/20 via-background to-accent/20 p-12 md:p-16">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-8 space-y-4">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                We're not just building products,{" "}
                <span className="text-primary">we're building Africa's tech future</span>
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
                Join us in revolutionizing industries and creating lasting impact across the continent and beyond.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Invest in KACHI LABS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary bg-transparent"
              >
                Join Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
