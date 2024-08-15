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
    "Collect, manage, and analyze real-time user feedback with Opinify's cutting-edge platform. Enhance customer engagement and experience with data-driven insights and comprehensive feedback management tools.",
  keywords: [
    "Opinify",
    "user feedback",
    "real-time feedback",
    "data-driven analytics",
    "customer engagement",
    "customer experience",
    "feedback management",
    "user insights",
    "feedback platform",
    "customer feedback",
    "survey tools",
    "NPS surveys",
    "customer satisfaction",
    "feedback analytics",
    "feedback collection",
    "user experience",
    "UX feedback",
    "customer insights",
    "user engagement",
    "opinion management",
    "real-time data",
    "feedback software",
    "feedback app",
    "customer support",
    "feedback solutions",
    "client feedback",
    "feedback system",
    "product feedback",
    "service feedback",
    "feedback integration",
    "feedback widgets",
    "real-time analytics",
    "feedback reporting",
    "feedback dashboard",
    "user feedback system",
    "customer feedback tool",
    "online feedback",
    "digital feedback",
    "customer opinions",
    "user opinions",
    "feedback loops",
    "closed-loop feedback",
    "open-ended feedback",
    "rating feedback",
    "review feedback",
    "testimonial feedback",
    "complaint feedback",
    "suggestion feedback",
    "idea feedback",
    "sentiment analysis",
    "text analytics",
    "natural language processing",
    "machine learning feedback",
    "AI-powered feedback",
    "predictive analytics",
    "prescriptive analytics",
    "descriptive analytics",
    "diagnostic analytics",
    "customer feedback analysis",
    "feedback visualization",
    "feedback metrics",
    "key performance indicators",
    "KPI tracking",
    "feedback benchmarking",
    "customer feedback metrics",
    "net promoter score",
    "customer effort score",
    "customer satisfaction score",
    "feedback categorization",
    "feedback tagging",
    "feedback filtering",
    "feedback sorting",
    "feedback prioritization",
    "feedback routing",
    "feedback escalation",
    "feedback resolution",
    "feedback closure",
    "feedback follow-up",
    "customer feedback response",
    "feedback response rate",
    "feedback response time",
    "customer feedback resolution rate",
    "customer feedback resolution time",
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
      "Collect, manage, and analyze real-time user feedback with Opinify's cutting-edge platform. Enhance customer engagement and experience with data-driven insights and comprehensive feedback management tools.",
    url: "https://www.opinify.in",
    siteName: "Opinify",
    images: [
      {
        url: "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
        width: 1200,
        height: 800,
        alt: "Opinify",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real-Time User Feedback | Opinify",
    description:
      "Collect, manage, and analyze real-time user feedback with Opinify's cutting-edge platform. Enhance customer engagement and experience with data-driven insights and comprehensive feedback management tools.",
    images: [
      "https://utfs.io/f/8bb4fcc0-1962-4846-a103-629911dfe0dd-dfa5bb.png",
    ],
  },
  other: {
    "schema-org": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Opinify",
      url: "https://www.opinify.in",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.opinify.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    }),
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
        <link rel="manifest" href="/public/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Real-Time User Feedback | Opinify" />
        <meta
          property="og:description"
          content="Collect, manage, and analyze real-time user feedback with Opinify's cutting-edge platform. Enhance customer engagement and experience with data-driven insights and comprehensive feedback management tools."
        />
        <meta property="og:url" content="https://www.opinify.in" />
        <meta property="og:site_name" content="Opinify" />
        <meta
          property="og:image"
          content="https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Real-Time User Feedback | Opinify"
        />
        <meta
          property="twitter:description"
          content="Collect, manage, and analyze real-time user feedback with Opinify's cutting-edge platform. Enhance customer engagement and experience with data-driven insights and comprehensive feedback management tools."
        />
        <meta
          property="twitter:image"
          content="https://utfs.io/f/8bb4fcc0-1962-4846-a103-629911dfe0dd-dfa5bb.png"
        />
        <link rel="canonical" href="https://www.opinify.in" />
        <title>Real-Time User Feedback | Opinify</title>
      </head>
      <body className={`${inter.className}`}>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="z-[10] overflow-x-hidden">{children}</div>
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
