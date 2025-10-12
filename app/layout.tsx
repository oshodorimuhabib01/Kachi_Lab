import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react"; // ✅ use /react instead of /next
import "./globals.css";

export const metadata: Metadata = {
  title: "Kachi Labs",
  description: "Created with Kachi Labs",
  generator: "Kachi Labs",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // ✅ Added suppressHydrationWarning to ignore browser extension mismatches
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        {/* ✅ Analytics should be the React version */}
        <Analytics />
      </body>
    </html>
  );
}
