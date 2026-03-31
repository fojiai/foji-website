import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Foji AI — Forge Your Intelligence",
  description: "Create AI-powered chat agents trained on your documents. Embed on your website or connect via WhatsApp. Built for Brazilian businesses.",
  icons: { icon: "/favicon_foji.png" },
  openGraph: {
    title: "Foji AI — Forge Your Intelligence",
    description: "Create AI-powered chat agents trained on your documents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-background text-foreground font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
