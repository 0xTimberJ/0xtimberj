import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "0xTimberJ",
  description: "Portfolio of 0xTimberJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        data-website-id="3683321c-7e86-4da0-bbc8-fd41067bd1aa"
        src="https://umami.0xtimberj.com/script.js"
        strategy={"afterInteractive"}
      />
      <body>
        <Header />
        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
