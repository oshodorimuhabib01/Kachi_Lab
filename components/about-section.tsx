import { Target, Eye, Heart, Lightbulb, Users, Shield } from "lucide-react"

export function AboutSection() {
  const values = [
    { icon: Users, label: "Collaboration" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: Shield, label: "Integrity" },
    { icon: Heart, label: "Impact" },
  ]

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src="/futuristic-ai-and-blockchain-technology-visualizat.jpg"
                alt="AI and Web3 Technology"
                className="h-full w-full object-cover opacity-80"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-foreground">
                About <span className="text-primary">KACHI LABS</span>
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Mission</h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    To accelerate technological innovation across Africa by building world-class AI and Web3 solutions
                    that solve real-world problems at scale.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Vision</h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    To become the leading technology innovation hub that transforms industries and empowers communities
                    through cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Core Values</h3>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value) => (
                  <div
                    key={value.label}
                    className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <value.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium text-card-foreground">{value.label}</span>
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
