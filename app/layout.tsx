import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import Footer from "../components/footer";
import Header from "../components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Sip & Play',
    default: 'Sip & Play',
  },
  description: "Sip & Play is Park Slope's first board game cafe, offering a library of 300+ games, coffee, espresso, boba, sandwiches, and snacks. Come in with your friends and family for a fun and delicious experience!",
  keywords: "Sip & Play, board game cafe, Park Slope cafe, coffee, espresso, boba, sandwiches, snacks, board games",
  openGraph: {
    title: "Sip & Play - Park Slope's First Board Game Cafe",
    description: "Enjoy a unique experience at Sip & Play with over 300 board games, coffee, boba, and more. Perfect for friends and family!",
    images: [
      {
        url: "/storefront.png",
        width: 1600,
        height: 883,
        alt: "Sip & Play Cafe",
      }
    ],
    url: "https://www.sipnplaynyc.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sip & Play - Park Slope's First Board Game Cafe",
    description: "Visit Sip & Play for a fun board game experience with coffee, boba, and delicious snacks in Park Slope.",
    images: [
      {
        url: "/storefront.png",
        width: 1600,
        height: 883,
        alt: "Sip & Play Cafe",
      }
    ],
  },
  alternates: {
    canonical: "https://www.sipnplaynyc.com/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <div className="h-screen flex flex-col">
          <Header />
          {/* <div className="flex flex-col items-center">
          <div className="container">{children}</div>
        </div> */}
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
