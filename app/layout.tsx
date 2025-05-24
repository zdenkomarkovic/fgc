import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  title: "LED Rasveta za Javne i Poslovne Prostore | FGC",
  description:
    "Ovlašćeni zastupnik Luminos LED rasvete za Srbiju i Crnu Goru. Kvalitetna i efikasna rešenja za gradove i biznis prostore.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  keywords: [
    "LED rasveta",
    "javna rasveta",
    "poslovna rasveta",
    "Luminos",
    "FGC",
    "ušteda energije",
    "pametna rasveta",
    "rasveta za hale",
    "rasveta za ulice",
    "LED tehnologija",
  ],
  alternates: {
    canonical: "https://www.fgc.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted bg-foreground  text-lg md:text-xl`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
