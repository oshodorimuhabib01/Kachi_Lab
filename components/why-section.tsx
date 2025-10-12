import { Globe2, Zap, Users2, TrendingUp } from "lucide-react"

export function WhySection() {
  const pillars = [
    {
      icon: Globe2,
      title: "Global Scalability",
      description: "Built for worldwide reach with infrastructure that scales seamlessly across markets and regions.",
    },
    {
      icon: Zap,
      title: "Disruptive Innovation",
      description: "Pioneering solutions that challenge the status quo and redefine industry standards.",
    },
    {
      icon: Users2,
      title: "Community Impact",
      description: "Creating meaningful change that empowers communities and drives social progress.",
    },
    {
      icon: TrendingUp,
      title: "High Revenue Potential",
      description: "Targeting multi-billion dollar markets with proven business models and growth strategies.",
    },
  ]

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
            Why Choose <span className="text-primary">KACHI LABS</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Four pillars that set us apart in the innovation landscape
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group space-y-4 rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <pillar.icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-semibold text-card-foreground">{pillar.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
