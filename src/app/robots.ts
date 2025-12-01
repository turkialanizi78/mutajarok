// src/app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/", // منع الوصول لـ API routes
        "/_next/", // ملفات Next.js الداخلية
        "/admin/", // لوحة التحكم (إن وجدت)
        // أضف أي مسارات أخرى لا تريد فهرستها
      ],
    },
    sitemap: "https://mtajercom.com/sitemap.xml",
  };
}
