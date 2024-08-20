import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Feedback Collection SaaS | Opinify.in",
    template: "%s - Opinify.in",
  },
  description:
    "Collect, manage, and analyze real-time user feedback with Opinify's cutting-edge platform. Enhance customer engagement and experience with data-driven insights and comprehensive feedback management tools.",
  twitter: {
    card: "summary_large_image",
    title: "Feedback Collection SaaS | Opinify.in",
    description:
      "Collect, manage, and analyze real-time user feedback with Opinify's cutting-edge platform. Enhance customer engagement and experience with data-driven insights and comprehensive feedback management tools.",
    images: [
      // "https://utfs.io/f/8bb4fcc0-1962-4846-a103-629911dfe0dd-dfa5bb.png",
      "https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png",
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
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
