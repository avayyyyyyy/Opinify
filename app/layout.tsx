import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Particles from "@/components/magicui/particles";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opinify",
  description: "Created by Shubhankit Jain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Particles
            className="absolute inset-0"
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh
          />
          <Navbar />
          <div className="z-[10]">{children}</div>
          <Footer />
          <Toaster richColors closeButton duration={4000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
