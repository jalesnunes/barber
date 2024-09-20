import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "./_components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barber",
  description: "Generated by create next app",
};

/**
 * This is the root layout component for the Barber application. It wraps all pages and provides
 * necessary components and styles.
 *
 * @param children - The React children to be rendered within the root layout.
 * @returns The root layout component with the provided children and necessary components.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}> 
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
