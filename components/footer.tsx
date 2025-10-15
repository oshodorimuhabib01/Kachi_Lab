import Link from "next/link"
import { Twitter, Linkedin, Send } from "lucide-react"

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-[#050629] py-16 text-gray-300"
    >
      <div className="container mx-auto px-4">
        {/* === Main Grid === */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* === Brand & Social === */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-white">KACHI</span>
              <span className="text-primary"> LABS</span>
            </div>
            <p className="text-pretty text-sm leading-relaxed text-gray-400">
              Building Africa's tech future through innovative AI & Web3 solutions.
            </p>

            {/* === Social Links === */}
            <div className="flex gap-4 pt-2">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Send, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="
                    flex h-10 w-10 items-center justify-center rounded-lg
                    border border-white/10 bg-[#070a2a]
                    text-gray-400 transition-all duration-300
                    hover:text-primary hover:border-primary
                    hover:shadow-[0_0_12px_rgba(99,102,241,0.6)]
                    hover:scale-105
                  "
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* === Quick Links === */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#products", label: "Products" },
                { href: "#about", label: "About" },
                { href: "#", label: "Careers" },
                { href: "#", label: "Blog" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 transition-all hover:text-primary hover:pl-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === Contact === */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Lagos, Nigeria</li>
              <li>
                <Link
                  href="mailto:info@kachilabs.com"
                  className="hover:text-primary transition-colors"
                >
                  info@kachilabs.com
                </Link>
              </li>
              <li>
                <Link href="tel:+2341234567890" className="hover:text-primary transition-colors">
                  +234 (0) 123 456 7890
                </Link>
              </li>
            </ul>
          </div>

          {/* === Legal === */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#", label: "Privacy Policy" },
                { href: "#", label: "Terms of Service" },
                { href: "#", label: "Cookie Policy" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-400 transition-all hover:text-primary hover:pl-1"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === Bottom Bar === */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">KACHI LABS</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
