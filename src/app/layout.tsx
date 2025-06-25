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
        data-website-id="4d49fec8-1a22-4030-9b55-120705c807cc"
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
