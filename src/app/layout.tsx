import type { Metadata } from "next";
import { Inter, Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "JARVIS // ALPHA OS — A Free, Local Assistant That Protects Your Money",
  description:
    "A free, local, bilingual (English/Hindi) assistant that guards against scams, exposes hidden fund fees and overlap, and explains every number — no cloud, no broker, no guesswork.",
  keywords: [
    "personal finance assistant",
    "scam protection",
    "mutual fund overlap",
    "explainable AI",
    "portfolio x-ray",
    "local AI assistant",
  ],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "JARVIS // ALPHA OS — A Free, Local Assistant That Protects Your Money",
    description:
      "Protect, learn, and decide with confidence — every number computed by code you can read, not guessed by an AI.",
    siteName: "JARVIS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${grotesk.variable} ${caveat.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
