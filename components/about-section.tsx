import { Target, Eye, Heart, Lightbulb, Users, Shield } from "lucide-react"

export function AboutSection() {
  const values = [
    { icon: Users, label: "Collaboration" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: Shield, label: "Integrity" },
    { icon: Heart, label: "Impact" },
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 bg-[#050629] text-gray-300"
    >
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050629] via-[#070a2a] to-[#050629] opacity-90" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* === Image Section === */}
          <div className="relative animate-slide-in-left">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 transform transition-all duration-700 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.6)]">
              <img
                src="/futuristic-ai-and-blockchain-technology-visualizat.jpg"
                alt="AI and Web3 Technology"
                className="h-full w-full object-cover opacity-80 transition-opacity duration-500 hover:opacity-100"
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(99,102,241,0.6)] animate-float">
              Your patronage is our motivation!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-[0_0_15px_rgba(236,72,153,0.5)] animate-float delay-300">
              Web3 Ready
            </div>
          </div>

          {/* === Text Section === */}
          <div className="flex flex-col justify-center space-y-10 animate-slide-in-right">
            <div className="space-y-5">
              <h2 className="text-4xl font-bold tracking-tight text-white animate-fade-in-up">
                About <span className="text-primary">KACHI LABS</span>
              </h2>

              {/* Mission */}
              <div className="space-y-2 animate-fade-in-up delay-100 group cursor-pointer">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-primary">
                    Mission
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  To accelerate technological innovation across Africa by
                  building world-class AI and Web3 solutions that solve
                  real-world problems at scale.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-2 animate-fade-in-up delay-200 group cursor-pointer">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-primary">
                    Vision
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  To become the leading technology innovation hub that transforms
                  industries and empowers communities through cutting-edge
                  solutions.
                </p>
              </div>
            </div>

            {/* === Core Values === */}
            <div className="space-y-5 animate-fade-in-up delay-300">
              <h3 className="text-xl font-semibold text-white">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div
                    key={value.label}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-4 hover:border-primary/60 hover:bg-white/10 transition-all cursor-pointer group animate-scale-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <value.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                    <span className="font-medium text-gray-200 transition-colors group-hover:text-primary">
                      {value.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
