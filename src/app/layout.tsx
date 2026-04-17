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
  title: "Foji AI — AI Agents for WhatsApp & Your Website, Trained on Your Documents",
  description: "Train an AI on your documents and deploy it to WhatsApp and your website in minutes. Answer customer questions 24/7 — automatically. LGPD compliant. Built for Brazilian businesses.",
  icons: { icon: "/favicon_foji.png" },
  openGraph: {
    title: "Foji AI — Your Business on WhatsApp, Powered by AI",
    description: "Train an AI agent on your documents. Deploy to WhatsApp and your website in under 5 minutes. Instant answers for your customers, 24/7.",
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
