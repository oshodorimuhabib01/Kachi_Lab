import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-[#050629] via-[#070a2a] to-[#050629]"
    >
      {/* === Animated background glow === */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow delay-300" />

      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <div className="mx-auto max-w-4xl space-y-8">

          {/* === Animated Badge === */}
          <div
            className="
              inline-flex items-center gap-2 rounded-full
              border border-primary/70 bg-primary/10
              px-4 py-2 text-sm text-primary
              animate-fade-in-down cursor-pointer
              transition-all duration-300 ease-in-out
              hover:scale-105 hover:border-primary
              hover:shadow-[0_0_12px_rgba(99,102,241,0.6)]
            "
          >
            <Sparkles className="h-4 w-4 animate-float text-primary" />
            <span className="text-white font-medium">
              Building Africa&apos;s Tech Future
            </span>
          </div>

          {/* === Heading === */}
          <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl animate-fade-in-up delay-100">
            Technological Brilliance{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Fast-Tracked
            </span>
          </h1>

          {/* === Description === */}
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-gray-400 md:text-xl animate-fade-in-up delay-200">
            KACHI LABS is building scalable AI & Web3 solutions for sports,
            healthcare, fintech, logistics, commerce, and beyond.
          </p>

          {/* === Buttons === */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up delay-300">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift hover-glow group"
            >
              Discover Our Vision
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-white/20 text-white hover:bg-white/10 hover-lift group bg-transparent"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>

      {/* === Scroll indicator === */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-primary/50 flex items-start justify-center p-1">
          <div className="h-2 w-1 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  )
}
