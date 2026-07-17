import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "SmileDesign — Стоматологічна клініка",
  description: "Преміальна стоматологічна клініка. Імплантація, вініри, відбілювання та комплексне лікування зубів.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white-canvas text-primary-text font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
