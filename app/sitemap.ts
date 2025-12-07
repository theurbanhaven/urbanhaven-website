import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://theurbanhaven.in"
    return [
        {
            url: `${baseUrl}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1,
        },
        {
            url: `${baseUrl}/styles`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/privacypolicy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3, 
        },
         {
            url: `${baseUrl}/termscondition`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
         },
         {
            url: `${baseUrl}/contactus`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
         },
         {
            url: `${baseUrl}/aboutus`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6
         }
    ]
}