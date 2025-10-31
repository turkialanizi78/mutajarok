'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import ClientOnly from './ClientOnly'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Safe theme and language hooks
  let theme = 'dark' // Default to dark theme
  let toggleTheme = () => {}
  let language = 'ar'
  let toggleLanguage = () => {}
  let t = (key: string) => key

  try {
    const themeContext = useTheme()
    theme = themeContext.theme
    toggleTheme = themeContext.toggleTheme
  } catch {
    // Theme context not available yet
  }

  try {
    const languageContext = useLanguage()
    language = languageContext.language
    toggleLanguage = languageContext.toggleLanguage
    t = languageContext.t
  } catch {
    // Language context not available yet
  }

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.project'), href: '/project' },
    { name: t('nav.privacy'), href: '/privacy' },
    { name: t('nav.terms'), href: '/terms' },
    { name: t('nav.support'), href: '/support' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900/95 backdrop-blur-md border-b border-sky-200/60 dark:border-gray-700 z-50 shadow-lg dark:shadow-gray-900/20 transition-all duration-300" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="flex justify-between items-center h-18" suppressHydrationWarning>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-9 h-9 bg-gradient-to-br from-sky-600 to-blue-700 dark:from-purple-600 dark:to-purple-700 rounded-lg flex items-center justify-center transition-all duration-300">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              متاجركم
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/support"
              className="bg-sky-600 hover:bg-sky-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              {t('nav.getStarted')}
            </Link>
          </div>

          {/* Theme and Language Toggle */}
          <ClientOnly>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-white/80 dark:bg-gray-800 border border-sky-200/60 dark:border-gray-700 hover:bg-sky-50 dark:hover:bg-gray-700 hover:border-sky-300 dark:hover:border-gray-600 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
              >
                <Globe className="w-5 h-5 text-sky-600 dark:text-gray-400" />
              </button>
              
              <button
                onClick={toggleTheme}
                className="relative p-2 rounded-lg bg-white/80 dark:bg-gray-800 border border-sky-200/60 dark:border-gray-700 hover:bg-sky-50 dark:hover:bg-gray-700 hover:border-sky-300 dark:hover:border-gray-600 transition-all duration-200 hover:scale-105 group shadow-sm hover:shadow-md"
                title={theme === 'light' ? 'Switch to dark mode' : 'التبديل إلى الوضع النهاري'}
              >
                <div className="relative">
                  {theme === 'light' ? (
                    <Moon className="w-5 h-5 text-sky-600 dark:text-gray-400 group-hover:text-sky-700 dark:group-hover:text-purple-400 transition-colors duration-200" />
                  ) : (
                    <Sun className="w-5 h-5 text-amber-500 dark:text-gray-400 group-hover:text-amber-600 dark:group-hover:text-yellow-400 transition-colors duration-200" />
                  )}
                  {/* Pulse effect */}
                  <div className={`absolute inset-0 rounded-full ${theme === 'light' ? 'bg-sky-500' : 'bg-amber-400'} opacity-0 group-hover:opacity-30 animate-ping`}></div>
                </div>
              </button>
            </div>
          </ClientOnly>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/support"
                className="bg-sky-600 hover:bg-sky-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.getStarted')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}