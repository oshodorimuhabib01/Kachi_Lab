import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050629]/80 backdrop-blur-md transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* === Brand Section === */}
        <Link href="/" className="flex items-center gap-2">
          {/* ✅ Logo image */}
          <Image
            src="/kachilogo.png"
            alt="Kachi Labs Logo"
            width={36}
            height={36}
            className="rounded-md"
            priority
          />

          {/* ✅ Company Name */}
          <div className="text-2xl font-bold tracking-tight flex items-center">
            <span className="text-white">KACHI</span>
            <span className="text-primary"> LABS</span>
          </div>
        </Link>

        {/* === Navigation Links === */}
        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#products", label: "Products" },
            { href: "#impact", label: "Market Impact" },
            { href: "#join", label: "Join Us" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-white hover:drop-shadow-[0_0_4px_rgba(99,102,241,0.6)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* === Button === */}
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_10px_rgba(99,102,241,0.6)] transition-all duration-300">
          Explore Our Products
        </Button>
      </div>
    </header>
  )
}
