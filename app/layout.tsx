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
  title: "Snumps - Simple, Useful Mobile Apps Built for You",
  description: "Snumps creates simple, useful, and affordable mobile apps that make your life easier. Small team, big impact. Coming soon: Blackjack Game, Points Tracker, and Compound Interest Calculator.",
  openGraph: {
    title: "Snumps - Simple, Useful Mobile Apps Built for You",
    description: "Snumps creates simple, useful, and affordable mobile apps that make your life easier. Small team, big impact.",
    url: "https://snumps.com",
    siteName: "Snumps",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Snumps - Simple, Useful Mobile Apps",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snumps - Simple, Useful Mobile Apps Built for You",
    description: "Snumps creates simple, useful, and affordable mobile apps that make your life easier. Small team, big impact.",
    images: ["/og-image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
