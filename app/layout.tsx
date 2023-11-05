import ActiveSectionProvider from "@/context/ActiveSectionContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Background from "./Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dustin | Personal portfolio",
  description: "Dustin is a web developer with 3 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-100 text-gray-950 pt-28 
        sm:pt-36 
        dark:bg-[#111827] dark:text-gray-50 dark:text-opacity-90`}
      >
        <ActiveSectionProvider>
          <Background />
          <Header />
          {children}
          <Footer />
        </ActiveSectionProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}
