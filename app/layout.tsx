import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real-Time User Feedback | Opinify",
  description:
    "Collect, manage, and analyze real-time user feedback with Opinify's cutting-edge platform.",
  keywords: [
    "Opinify",
    "user feedback",
    "real-time",
    "data-driven",
    "analytics",
    "customer engagement",
    "customer experience",
    "feedback management",
    "user insights",
  ],
  authors: [{ name: "Shubhankit Jain", url: "https://www.opinify.in/" }],
  creator: "Shubhankit Jain",
  publisher: "Opinify",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Real-Time User Feedback | Opinify",
    description:
      "Collect, manage, and analyze real-time user feedback with Opinify's cutting-edge platform.",
    url: "https://www.opinify.in",
    siteName: "Opinify",
    images: [
      {
        url: "https://utfs.io/f/8bb4fcc0-1962-4846-a103-629911dfe0dd-dfa5bb.png",
        width: 800,
        height: 600,
        alt: "Opinify Logo",
      },
      {
        url: "https://utfs.io/f/023a0508-85a2-4e2e-a1b8-a537411e59e7-69gea9.webp",
        width: 1200,
        height: 800,
        alt: "Opinify Screenshot",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-Time User Feedback | Opinify",
    description:
      "Collect, manage, and analyze real-time user feedback with Opinify's cutting-edge platform.",
    images: [
      "https://utfs.io/f/8bb4fcc0-1962-4846-a103-629911dfe0dd-dfa5bb.png",
    ],
  },
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "widget-web-component": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        projectid: string;
      };
    }
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} `}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="z-[10]">{children}</div>
            <Footer />
            <Toaster richColors closeButton duration={4000} />
          </ThemeProvider>
        </SessionProvider>
        <div style={{ position: "fixed", bottom: "50px", right: "20px" }}>
          <widget-web-component projectid="clzqmvwjs0001ownulyf1v7iv"></widget-web-component>
        </div>
        <script
          async
          src="https://opinify-widget-w24d.vercel.app/widget.umd.js"
        ></script>
      </body>
    </html>
  );
}
