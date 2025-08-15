import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KBS Investment - Profesjonalne Usługi Instalacyjne",
  description: "Kompleksowe usługi instalacyjne: gaz, ogrzewanie, woda-kanalizacja, elektryka, wentylacja, konserwacja, inwentaryzacja, spawanie, eksploatacja i nadzór urządzeń elektrycznych/energetycznych/gazowych.",
  openGraph: {
    title: "KBS Investment - Profesjonalne Usługi Instalacyjne",
    description: "Kompleksowe usługi instalacyjne z gwarancją jakości i terminowości.",
    url: "https://kbsinvestment.pl",
    siteName: "KBS Investment",
    images: [
      {
        url: "https://kbsinvestment.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KBS Investment",
      },
    ],
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "KBS Investment - Profesjonalne Usługi Instalacyjne",
    description: "Kompleksowe usługi instalacyjne z gwarancją jakości i terminowości.",
    images: ["https://kbsinvestment.pl/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
