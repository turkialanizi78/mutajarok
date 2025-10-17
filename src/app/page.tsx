'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { ArrowLeft, Play, Star, Shield, Zap, Store, Users, BarChart3, Smartphone, Laptop, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Store,
      title: t('features.customStores'),
      description: t('features.customStoresDesc'),
    },
    {
      icon: Users,
      title: t('features.customerExperience'),
      description: t('features.customerExperienceDesc'),
    },
    {
      icon: Shield,
      title: t('features.advancedSecurity'),
      description: t('features.advancedSecurityDesc'),
    },
    {
      icon: BarChart3,
      title: t('features.analytics'),
      description: t('features.analyticsDesc'),
    },
    {
      icon: Smartphone,
      title: t('features.responsive'),
      description: t('features.responsiveDesc'),
    },
    {
      icon: Laptop,
      title: t('features.freeTrial'),
      description: t('features.freeTrialDesc'),
    },
  ]

  const pricingPlans = [
    {
      name: t('pricing.basic'),
      price: '15',
      period: t('pricing.period'),
      description: t('pricing.basicDesc'),
      features: [
        t('pricing.100Products'),
        t('pricing.5Employees'),
        t('pricing.1GBStorage'),
        t('pricing.emailSupport'),
      ],
      popular: false,
    },
    {
      name: t('pricing.advanced'),
      price: '35',
      period: t('pricing.period'),
      description: t('pricing.advancedDesc'),
      features: [
        t('pricing.500Products'),
        t('pricing.15Employees'),
        t('pricing.5GBStorage'),
        t('pricing.prioritySupport'),
        t('pricing.advancedReports'),
      ],
      popular: true,
    },
    {
      name: t('pricing.professional'),
      price: '75',
      period: t('pricing.period'),
      description: t('pricing.professionalDesc'),
      features: [
        t('pricing.unlimitedProducts'),
        t('pricing.50Employees'),
        t('pricing.20GBStorage'),
        t('pricing.managerSupport'),
        t('pricing.advancedReports'),
        t('pricing.customAPI'),
      ],
      popular: false,
    },
    {
      name: t('pricing.enterprise'),
      price: '150',
      period: t('pricing.period'),
      description: t('pricing.enterpriseDesc'),
      features: [
        t('pricing.everythingUnlimited'),
        t('pricing.unlimitedUsers'),
        t('pricing.unlimitedStorage'),
        t('pricing.dedicatedManager'),
        t('pricing.customSupport'),
        t('pricing.fullCustomization'),
        t('pricing.guaranteedSLA'),
      ],
      popular: false,
    },
  ]

  const testimonials = [
    {
      name: t('testimonials.customer1Name'),
      role: t('testimonials.customer1Role'),
      avatar: 'أ',
      content: t('testimonials.customer1Content'),
    },
    {
      name: t('testimonials.customer2Name'),
      role: t('testimonials.customer2Role'),
      avatar: 'س',
      content: t('testimonials.customer2Content'),
    },
    {
      name: t('testimonials.customer3Name'),
      role: t('testimonials.customer3Role'),
      avatar: 'م',
      content: t('testimonials.customer3Content'),
    },
  ]

  return (
    <div className="min-h-screen bg-light-gradient dark:bg-gray-900 transition-all duration-500" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-purple-900/30 text-blue-800 dark:text-purple-200 rounded-full text-sm font-medium mb-6 transition-all duration-300">
                <Zap className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                منصة Smart White Label
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 dark:from-purple-600 dark:to-purple-700 dark:hover:from-purple-700 dark:hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('hero.startFree')}
                  <ArrowLeft className="ml-2 w-5 h-5 rtl:ml-0 rtl:mr-2" />
                </Link>
                <Link
                  href="https://codebh.pages.dev/"
            target="_blank"
            rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/95 dark:bg-gray-800 border-2 border-sky-200 dark:border-gray-700 hover:border-sky-500 dark:hover:border-purple-400 text-gray-900 dark:text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5 rtl:mr-0 rtl:ml-2" />
                  {t('hero.watchDemo')}
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-sky-200/60 dark:border-gray-700 backdrop-blur-sm transition-all duration-300">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">أداء متميز</h3>
                  <span className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 rtl:mr-0 rtl:ml-2 animate-pulse"></div>
                    {t('common.activeNow')}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-sky-50 to-blue-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-xl text-center border border-sky-200 dark:border-purple-800 transition-all duration-300">
                    <div className="text-2xl font-bold text-sky-600 dark:text-purple-600">500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">متجر نشط</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-xl text-center border border-cyan-200 dark:border-blue-800 transition-all duration-300">
                    <div className="text-2xl font-bold text-cyan-600 dark:text-blue-600">10K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">عميل</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-xl text-center border border-emerald-200 dark:border-green-800 transition-all duration-300">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-green-600">99.9%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">وقت التشغيل</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 rounded-xl text-center border border-amber-200 dark:border-orange-800 transition-all duration-300">
                    <div className="text-2xl font-bold text-amber-600 dark:text-orange-600">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">دعم فني</div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-sky-500 dark:bg-purple-500 rounded-full opacity-20 animate-pulse transition-all duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-500 dark:bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-white/95 dark:bg-gray-800 border-b border-sky-200/60 dark:border-gray-700 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-8 font-medium">
            {t('trust.title')}
          </p>
          <div className="flex justify-center items-center space-x-12 rtl:space-x-reverse">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-gray-900 dark:text-white">{t('trust.rating')}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-900 dark:text-white">{t('trust.sslSecurity')}</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Zap className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-900 dark:text-white">{t('trust.highPerformance')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-sky-50/90 dark:bg-gray-900 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 dark:bg-purple-900 text-blue-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-300">
              المميزات
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('features.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-sky-200/60 dark:border-gray-700 card-3d hover-lift animate-slide-up stagger-${index + 1} relative overflow-hidden group transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-100/20 dark:via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Icon with 3D Effect */}
                <div className="w-16 h-16 bg-gradient-to-br from-sky-50 to-sky-100 dark:from-purple-900/30 dark:to-purple-800/30 rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300 shadow-lg border border-sky-200/50 dark:border-purple-800/30">
                  <feature.icon className="w-8 h-8 text-sky-600 dark:text-purple-400 group-hover:animate-bounce relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-200/30 to-transparent dark:from-purple-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-sky-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-sky-600 dark:text-purple-400 font-semibold mt-4 hover:text-sky-700 dark:hover:text-purple-300 transition-colors duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                >
                  {t('common.learnMore')}
                  <ArrowLeft className="ml-2 w-4 h-4 rtl:ml-0 rtl:mr-2 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-sky-400 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-sky-300 dark:bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white dark:bg-gray-800 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 dark:bg-purple-900 text-blue-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-300">
              الخطط والأسعار
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border-2 group overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? 'border-sky-500 dark:border-purple-400 card-3d animate-glow'
                    : 'border-sky-200/60 dark:border-gray-700 card-3d-light hover-lift'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  plan.popular ? 'bg-gradient-to-br from-sky-500 to-cyan-500 dark:from-purple-500 dark:to-pink-500' : 'bg-gradient-to-br from-sky-400 to-cyan-400 dark:from-gray-400 dark:to-gray-600'
                }`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {plan.name}
                    </h3>
                    {plan.popular && (
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        الأكثر شعبية
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-sky-600 dark:text-purple-600 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300"> {plan.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 pb-6 border-b border-sky-200/60 dark:border-gray-700">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center group/item">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 rtl:mr-0 rtl:ml-3 group-hover/item:animate-bounce" />
                        <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-emerald-600 dark:group-hover/item:text-green-400 transition-colors duration-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/support"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 group-hover:scale-105 ${
                      plan.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg'
                        : 'bg-sky-600 hover:bg-sky-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white shadow-lg'
                    }`}
                  >
                    {t('pricing.choosePlan')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-sky-50/90 dark:bg-gray-900 backdrop-blur-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 dark:bg-purple-900 text-blue-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 transition-all duration-300">
              آراء العملاء
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-sky-200/60 dark:border-gray-700 card-3d-light hover-lift animate-slide-up group relative overflow-hidden transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-sky-200 dark:text-purple-800 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  "
                </div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-600 to-cyan-500 dark:from-purple-600 dark:to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div className="mr-4 rtl:mr-0 rtl:ml-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-purple-400 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 text-yellow-500 fill-current transition-transform duration-200`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-sky-400 dark:bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute top-1/2 left-0 w-1 h-8 bg-gradient-to-b from-sky-500 to-transparent dark:from-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-blue-700 dark:from-purple-600 dark:to-purple-700 transition-all duration-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-sky-100 dark:text-purple-100 mb-8">
            {t('cta.subtitle')}
          </p>
          <Link
            href="/support"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-sky-600 dark:text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {t('cta.startNow')}
            <Zap className="ml-2 w-5 h-5 rtl:ml-0 rtl:mr-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}