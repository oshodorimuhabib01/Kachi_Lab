import { TrendingUp, DollarSign, Heart, Lock } from "lucide-react"

export function ImpactSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "3.5B",
      label: "Football fans",
      product: "FOOT NFTs",
      color: "text-chart-1",
    },
    {
      icon: DollarSign,
      value: "$65B",
      label: "Fintech opportunity",
      product: "OMI-Pay, Tax-Zen",
      color: "text-chart-2",
    },
    {
      icon: Heart,
      value: "$100B",
      label: "AI healthcare market",
      product: "Predict-Pro",
      color: "text-chart-3",
    },
    {
      icon: TrendingUp,
      value: "$75B",
      label: "African e-commerce",
      product: "Pan-African Marketspace",
      color: "text-chart-4",
    },
    {
      icon: Lock,
      value: "$30B",
      label: "Authentication & security",
      product: "CarSec, GenuScan",
      color: "text-chart-5",
    },
  ]

  return (
    <section id="impact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
            The Market We're <span className="text-primary">Disrupting</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Tapping into multi-billion dollar opportunities across key industries
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute right-4 top-4 opacity-10 transition-opacity group-hover:opacity-20">
                <stat.icon className={`h-24 w-24 ${stat.color}`} />
              </div>

              <div className="relative space-y-4">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${stat.color}`}
                >
                  <stat.icon className="h-6 w-6" />
                </div>

                <div>
                  <div className={`text-4xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="mt-2 text-lg font-medium text-card-foreground">{stat.label}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.product}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
