/** @type {import('next').NextConfig} */
const nextConfig = {
  // إعدادات أساسية
  reactStrictMode: true,
  swcMinify: true,
  
  // إعدادات الصور
  images: {
    unoptimized: true, // مطلوب لـ Cloudflare Pages
  },

  // إعدادات التصدير (للنشر على Cloudflare Pages)
  output: 'export',
  trailingSlash: true,
  
  // إعدادات الأمان
  poweredByHeader: false,
}

module.exports = nextConfig
