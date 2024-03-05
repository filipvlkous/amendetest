import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarBody } from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookt App",
  description: "Bookap",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, " bg-black ")}>
        <header>
          <NavbarBody />
        </header>
        {children}
      </body>
    </html>
  );
}
