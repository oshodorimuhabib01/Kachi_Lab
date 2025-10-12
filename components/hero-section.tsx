import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Building Africa's Tech Future</span>
          </div>

          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Technological Brilliance <span className="text-primary">Fast-Tracked</span>
          </h1>

          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            KACHI LABS is building scalable AI & Web3 solutions for sports, healthcare, fintech, logistics, commerce,
            and beyond.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Discover Our Vision
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary bg-transparent"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
