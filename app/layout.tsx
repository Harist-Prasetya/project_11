import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ELYSIUM STUDIO — Where Dimensions Come Alive",
  description:
    "Premium 3D design and motion graphics studio specializing in cinematic visuals, real-time rendering, and immersive digital experiences.",
  keywords: [
    "3D design",
    "motion graphics",
    "3D animation",
    "cinematic rendering",
    "real-time 3D",
    "visual effects",
  ],
  openGraph: {
    title: "ELYSIUM STUDIO — Where Dimensions Come Alive",
    description:
      "Premium 3D design and motion graphics studio specializing in cinematic visuals, real-time rendering, and immersive digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
