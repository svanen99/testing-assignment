import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio - Alexandra Blomberg",
  description: "A blooming portfolio - The display of my projects! By Alexandra Blomberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen h-full m-0">
      <body className="flex flex-col w-full min-h-screen bg-pink-50">
      <Header />
        <div className="flex-grow max-w-4xl mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}