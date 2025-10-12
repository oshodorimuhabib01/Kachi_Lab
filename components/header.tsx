import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* === Brand Section === */}
        <Link href="/" className="flex items-center gap-2">
          {/* ✅ Logo image */}
          <Image
            src="/kachilogo.png"  // from the public folder
            alt="Kachi Labs Logo"
            width={36}
            height={36}
            className="rounded-md"
            priority
          />

          {/* ✅ Company Name */}
          <div className="text-2xl font-bold tracking-tight flex items-center">
            <span className="text-foreground">KACHI</span>
            <span className="text-primary"> LABS</span>
          </div>
        </Link>

        {/* === Navigation Links === */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#home"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#products"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Products
          </Link>
          <Link
            href="#impact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Market Impact
          </Link>
          <Link
            href="#join"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Join Us
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        {/* === Button === */}
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Explore Our Products
        </Button>
      </div>
    </header>
  )
}
