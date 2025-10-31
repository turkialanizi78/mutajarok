'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { Heart, MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  // Safe language hook
  let t = (key: string) => key

  try {
    const languageContext = useLanguage()
    t = languageContext.t
  } catch {
    // Language context not available yet
  }

  const footerLinks = {
    platform: [
      { name: t('nav.home'), href: '/' },
      { name: t('nav.project'), href: '/project' },
      { name: t('footer.features'), href: '#features' },
      { name: t('footer.pricing'), href: '#pricing' },
      { name: t('footer.demo'), href: 'https://codebh.pages.dev/', external: true },
    ],
    support: [
      { name: t('nav.support'), href: '/support' },
      { name: t('footer.faq'), href: '#faq' },
      { name: t('nav.contact'), href: '/support' },
      { name: t('footer.community'), href: '#community' },
    ],
    legal: [
      { name: t('nav.privacy'), href: '/privacy' },
      { name: t('nav.terms'), href: '/terms' },
      { name: t('footer.usagePolicy'), href: '/terms' },
      { name: t('footer.cookiePolicy'), href: '/privacy' },
    ],
  }

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/mrtaroky/', icon: '📸' },
    { name: 'Discord', href: 'https://discord.gg/fk9d7jhd3Z', icon: '💬' },
    { name: 'GitHub', href: 'https://github.com/turkialanizi78', icon: '💻' },
    { name: 'YouTube', href: 'https://www.youtube.com/@mrtaroky', icon: '📺' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-white transition-all duration-500" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <span className="text-2xl font-bold">متاجركم</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.platform')}</h3>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.support')}</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span className="text-gray-300">{t('footer.address')}</span>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Mail className="w-5 h-5 text-purple-400" />
              <a href="mailto:support@mtajercom.com" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                support@mtajercom.com
              </a>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Phone className="w-5 h-5 text-purple-400" />
              <a href="tel:+97333991916" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                +973 3399 1916
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 متاجركم. {t('footer.allRightsReserved')}
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-red-500 inline mx-1" /> {t('footer.inBahrain')}
          </p>
        </div>
      </div>
    </footer>
  )
}