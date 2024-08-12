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
  title: "Opinify - Real-Time User Feedback Platform",
  description:
    "Opinify is a cutting-edge platform designed to collect, manage, and analyze real-time user feedback. Created by Shubhankit Jain, Opinify enables businesses to gain immediate insights through customizable feedback widgets, multi-platform integration, and comprehensive analytics.",
  keywords: [
    "Opinify",
    "user feedback",
    "real-time",
    "data-driven",
    "analytics",
    "customer engagement",
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
    title: "Opinify - Real-Time User Feedback Platform",
    description:
      "Opinify is a cutting-edge platform designed to collect, manage, and analyze real-time user feedback. Created by Shubhankit Jain, Opinify enables businesses to gain immediate insights through customizable feedback widgets, multi-platform integration, and comprehensive analytics.",
    url: "https://www.opinify.in",
    siteName: "Opinify",
    images: [
      {
        url: "/Logo.png",
        width: 800,
        height: 600,
        alt: "Opinify Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    // card: "summary_large_image",
    title: "Opinify - Real-Time User Feedback Platform",
    description:
      "Opinify is a cutting-edge platform designed to collect, manage, and analyze real-time user feedback. Created by Shubhankit Jain, Opinify enables businesses to gain immediate insights through customizable feedback widgets, multi-platform integration, and comprehensive analytics.",
    // images: ["https://www.opinify.com/twitter-card.png"],
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
