import { Globe2, Zap, Users2, TrendingUp } from "lucide-react"

export function WhySection() {
  const pillars = [
    {
      icon: Globe2,
      title: "Global Scalability",
      description:
        "Built for worldwide reach with infrastructure that scales seamlessly across markets and regions.",
    },
    {
      icon: Zap,
      title: "Disruptive Innovation",
      description:
        "Pioneering solutions that challenge the status quo and redefine industry standards.",
    },
    {
      icon: Users2,
      title: "Community Impact",
      description:
        "Creating meaningful change that empowers communities and drives social progress.",
    },
    {
      icon: TrendingUp,
      title: "High Revenue Potential",
      description:
        "Targeting multi-billion dollar markets with proven business models and growth strategies.",
    },
  ]

  return (
    <section
      id="why"
      className="relative py-24 bg-[#050629] overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float-smooth" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white animate-fade-in-up">
            Why Choose{" "}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              KACHI LABS
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-gray-400 animate-fade-in-up delay-200">
            Four pillars that set us apart in the innovation landscape
          </p>
        </div>

        {/* Pillar Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative space-y-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all duration-300 hover:border-primary/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Icon */}
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:text-accent">
                <pillar.icon className="h-7 w-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-pretty leading-relaxed text-gray-400">
                {pillar.description}
              </p>

              {/* Glow on hover */}
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-accent/10 to-transparent blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
