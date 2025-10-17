/** @type {import('next').NextConfig} */
const nextConfig = {
  // إعدادات أساسية
  reactStrictMode: true,
  
  // إعدادات الصور
  images: {
    unoptimized: true, // مطلوب لـ Cloudflare Pages
  },

  // إعدادات التصدير (للنشر على Cloudflare Pages)
  output: 'export',
  trailingSlash: true,
  
  // إعدادات الأمان
  poweredByHeader: false,
  
  // إعدادات Cloudflare
  experimental: {
    runtime: 'nodejs',
  },
}

module.exports = nextConfig
