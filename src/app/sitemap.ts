// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mtajercom.com";
  const currentDate = new Date();

  // الصفحات الثابتة - عدّل هذه القائمة حسب صفحاتك
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    // أضف باقي صفحاتك هنا
    // مثال:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.8,
    // },
  ];

  // إذا كان لديك صفحات ديناميكية (منتجات، مقالات، إلخ)
  // يمكنك إضافتها هنا:
  // const products = await fetchProducts() // من API أو Database
  // const productRoutes = products.map((product) => ({
  //   url: `${baseUrl}/project/${product.slug}`,
  //   lastModified: new Date(product.updatedAt),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.6,
  // }))

  return [
    ...routes,
    // ...productRoutes,
  ];
}
