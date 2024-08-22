import type { Metadata } from "next";
import "./globals.css";

import { satoshi } from "@/utils/font";

export const metadata: Metadata = {
  title: "Debbie Chops",
  description: "service brand website from omnihale",
  keywords: [
    "Business innovation",
    "Innovative business solutions",
    "Business transformation",
    "Cutting-edge business strategies",
    "Revolutionizing business",
    "Future of business",
    "Business development",
    "Modern business practices",
  ],
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
    </html>
  );
}
