import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";
import { createMetadata } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = createMetadata(
  "AI Inverse Displacement Theory",
  "Understanding why AI will disrupt knowledge work before manual labor, based on Jesse Campbell's groundbreaking research on AI displacement patterns.",
  ["AI job displacement", "knowledge work automation", "employment trends", "AI impact analysis"]
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
