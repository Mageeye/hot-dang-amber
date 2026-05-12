import type { Metadata } from "next";
import { Antonio, Inter_Tight } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hot-dang-amber.vercel.app"),
  title: "Hot Dang - Creative Production Studio",
  description:
    "A cinematic production studio portfolio inspired by the Amber Framer template.",
  openGraph: {
    title: "Hot Dang - Creative Production Studio",
    description:
      "Cinematic portfolio homepage for Hot Dang, built for Vercel deployment.",
    images: ["/media/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${antonio.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
