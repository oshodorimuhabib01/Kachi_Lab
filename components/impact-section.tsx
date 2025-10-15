import { TrendingUp, DollarSign, Heart, Lock } from "lucide-react"

export function ImpactSection() {
  const stats = [
    { icon: TrendingUp, value: "3.5B", label: "Football fans", product: "FOOT NFTs", color: "text-blue-400" },
    { icon: DollarSign, value: "$65B", label: "Fintech opportunity", product: "OMI-Pay, Tax-Zen", color: "text-cyan-400" },
    { icon: Heart, value: "$100B", label: "AI healthcare market", product: "Predict-Pro", color: "text-pink-400" },
    { icon: TrendingUp, value: "$75B", label: "African e-commerce", product: "Pan-African Marketspace", color: "text-violet-400" },
    { icon: Lock, value: "$30B", label: "Authentication & security", product: "CarSec, GenuScan", color: "text-emerald-400" },
  ]

  return (
    <section id="impact" className="py-24 relative bg-gradient-to-b from-[#050629] via-[#080a2b] to-[#050629]">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center animate-fade-in-up">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">
            The Market We're <span className="text-primary">Disrupting</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-gray-400">
            Tapping into multi-billion dollar opportunities across key industries
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover-lift cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute right-4 top-4 opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:rotate-12 group-hover:scale-110">
                <stat.icon className={`h-24 w-24 ${stat.color}`} />
              </div>

              <div className="relative space-y-4">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${stat.color} transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <stat.icon className="h-6 w-6" />
                </div>

                <div>
                  <div className={`text-4xl font-bold ${stat.color} transition-all duration-300 group-hover:scale-110`}>
                    {stat.value}
                  </div>
                  <div className="mt-2 text-lg font-medium text-gray-200 transition-colors group-hover:text-primary">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{stat.product}</div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
