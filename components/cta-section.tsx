import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, TrendingUp } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="join"
      className="relative py-24 bg-gradient-to-b from-[#050629] via-[#070a2a] to-[#050629] overflow-hidden"
    >
      {/* Soft moving glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl animate-pulse-slow delay-300" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-12 md:p-16 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)] transition-all duration-500 hover:shadow-[0_0_50px_-5px_rgba(99,102,241,0.5)]">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-60 animate-float" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl opacity-60 animate-float delay-300" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mb-8 space-y-4">
              <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl animate-fade-in-up">
                We're not just building products,{" "}
                <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  we're building Africa's tech future
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-lg text-gray-400 animate-fade-in-up delay-150">
                Join us in revolutionizing industries and creating lasting
                impact across the continent and beyond.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up delay-300">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(99,102,241,0.6)] transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Us
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border border-white/20 text-white hover:bg-white/10 bg-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                <TrendingUp className="mr-2 h-4 w-4" />
                Invest in KACHI LABS
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border border-white/20 text-white hover:bg-white/10 bg-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1"
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
