import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blooming",
  description: "Alexandra Blomberg - About me, my projects, let us connect!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen h-ful m-0">
      <body className="w-full min-h-full">
      <Header />
        <div className="flex-grow">
          {children}
        </div>
      <Footer />
      </body>
    </html>
  );
}
