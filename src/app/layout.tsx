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
  title: "Foji AI — Agentes de IA para WhatsApp e site, treinados com os seus documentos",
  description: "Treine uma IA com os seus documentos e coloque no WhatsApp e no seu site em minutos. Responda seus clientes 24 horas por dia, automaticamente. Conforme a LGPD. Feita para empresas brasileiras.",
  icons: { icon: "/favicon_foji.png" },
  openGraph: {
    title: "Foji AI — Sua empresa no WhatsApp, com IA",
    description: "Treine um agente de IA com os seus documentos e publique no WhatsApp e no seu site em menos de 5 minutos. Respostas na hora para os seus clientes, 24 horas por dia.",
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
