import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/server/",
          "/dashboard/",
        ],
      },
    ],
    sitemap: "https://theurbanhaven.in/sitemap.xml",
  };
}
