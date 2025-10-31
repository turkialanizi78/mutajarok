'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { FileText, CheckCircle, AlertTriangle, Shield, Users, CreditCard, Store, ShoppingCart, Gavel, Scale } from 'lucide-react'

export default function TermsPage() {
  const { t } = useLanguage()

  const termsSections = [
    {
      icon: FileText,
      title: t('terms.sections.definitions'),
      content: t('terms.sections.definitionsDesc'),
    },
    {
      icon: CheckCircle,
      title: t('terms.sections.acceptance'),
      content: t('terms.sections.acceptanceDesc'),
    },
    {
      icon: Store,
      title: t('terms.sections.merchants'),
      content: t('terms.sections.merchantsDesc'),
    },
    {
      icon: ShoppingCart,
      title: t('terms.sections.customers'),
      content: t('terms.sections.customersDesc'),
    },
    {
      icon: CreditCard,
      title: t('terms.sections.payment'),
      content: t('terms.sections.paymentDesc'),
    },
    {
      icon: Shield,
      title: t('terms.sections.dataProtection'),
      content: t('terms.sections.dataProtectionDesc'),
    },
    {
      icon: Gavel,
      title: t('terms.sections.disputes'),
      content: t('terms.sections.disputesDesc'),
    },
    {
      icon: Scale,
      title: t('terms.sections.liability'),
      content: t('terms.sections.liabilityDesc'),
    },
  ]

  const merchantObligations = [
    t('terms.merchantObligations.item1'),
    t('terms.merchantObligations.item2'),
    t('terms.merchantObligations.item3'),
    t('terms.merchantObligations.item4'),
    t('terms.merchantObligations.item5'),
    t('terms.merchantObligations.item6'),
  ]

  const customerRights = [
    t('terms.customerRights.item1'),
    t('terms.customerRights.item2'),
    t('terms.customerRights.item3'),
    t('terms.customerRights.item4'),
    t('terms.customerRights.item5'),
    t('terms.customerRights.item6'),
  ]

  const prohibitedPractices = [
    t('terms.prohibited.item1'),
    t('terms.prohibited.item2'),
    t('terms.prohibited.item3'),
    t('terms.prohibited.item4'),
    t('terms.prohibited.item5'),
    t('terms.prohibited.item6'),
    t('terms.prohibited.item7'),
    t('terms.prohibited.item8'),
  ]

  const paymentMethods = [
    {
      name: t('terms.paymentMethods.cod'),
      description: t('terms.paymentMethods.codDesc'),
      available: t('terms.paymentMethods.codAvailable'),
    },
    {
      name: t('terms.paymentMethods.bankTransfer'),
      description: t('terms.paymentMethods.bankTransferDesc'),
      available: t('terms.paymentMethods.bankTransferAvailable'),
    },
    {
      name: t('terms.paymentMethods.paytabs'),
      description: t('terms.paymentMethods.paytabsDesc'),
      available: t('terms.paymentMethods.paytabsAvailable'),
    },
    {
      name: t('terms.paymentMethods.stripe'),
      description: t('terms.paymentMethods.stripeDesc'),
      available: t('terms.paymentMethods.stripeAvailable'),
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('terms.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('terms.subtitle')}
          </p>
          <div className="mt-8 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
            <p className="text-purple-800 dark:text-purple-200 font-medium">
              <strong>{t('terms.lastUpdated')}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Terms Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {termsSections.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Important Notice */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 mr-3 rtl:mr-0 rtl:ml-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('terms.importantNotice')}
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('terms.importantNoticeDesc')}
              </p>
            </div>
          </div>

          {/* Merchant Obligations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('terms.merchantObligations.title')}
            </h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {merchantObligations.map((obligation, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{obligation}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('terms.customerRights.title')}
            </h2>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {customerRights.map((right, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{right}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              طرق الدفع المتاحة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paymentMethods.map((method, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {method.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {method.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {method.available}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Prohibited Practices */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              الممارسات المحظورة
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-xl border border-red-200 dark:border-red-800">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3 rtl:mr-0 rtl:ml-3" />
                <h3 className="text-xl font-bold text-red-800 dark:text-red-200">
                  تحذير: أي مخالفة لهذه القواعد قد تؤدي إلى إيقاف الحساب نهائياً
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {prohibitedPractices.map((practice, index) => (
                  <div key={index} className="flex items-start">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700 dark:text-red-300">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-2xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">هل تحتاج للمساعدة؟</h2>
            <p className="text-purple-100 mb-6">
              فريقنا متاح للإجابة على جميع استفساراتك حول شروط الاستخدام
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@mtajercom.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <FileText className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                support@mtajercom.com
              </a>
              <a
                href="/support"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors duration-200"
              >
                <Users className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                مركز الدعم
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
