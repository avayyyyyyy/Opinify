import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/dashboard/feedbacks"],
      },
    ],
    sitemap: `${process.env.AUTH_TRUST_HOST}sitemap.xml`,
  };
}
