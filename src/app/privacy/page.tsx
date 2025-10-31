'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Shield, Database, Lock, Eye, Trash2, Download, Settings, Bell, Users, FileText } from 'lucide-react'

export default function PrivacyPage() {
  const { t } = useLanguage()

  const privacySections = [
    {
      icon: Database,
      title: t('privacy.sections.dataCollection'),
      content: t('privacy.sections.dataCollectionDesc'),
    },
    {
      icon: Lock,
      title: t('privacy.sections.dataUsage'),
      content: t('privacy.sections.dataUsageDesc'),
    },
    {
      icon: Shield,
      title: t('privacy.sections.dataProtection'),
      content: t('privacy.sections.dataProtectionDesc'),
    },
    {
      icon: Users,
      title: t('privacy.sections.userRights'),
      content: t('privacy.sections.userRightsDesc'),
    },
  ]

  const dataTypes = [
    {
      title: t('privacy.dataTypes.personal'),
      items: [
        t('privacy.dataTypes.personalItem1'),
        t('privacy.dataTypes.personalItem2'),
        t('privacy.dataTypes.personalItem3'),
        t('privacy.dataTypes.personalItem4'),
        t('privacy.dataTypes.personalItem5'),
      ],
    },
    {
      title: t('privacy.dataTypes.usage'),
      items: [
        t('privacy.dataTypes.usageItem1'),
        t('privacy.dataTypes.usageItem2'),
        t('privacy.dataTypes.usageItem3'),
        t('privacy.dataTypes.usageItem4'),
        t('privacy.dataTypes.usageItem5'),
      ],
    },
    {
      title: t('privacy.dataTypes.commercial'),
      items: [
        t('privacy.dataTypes.commercialItem1'),
        t('privacy.dataTypes.commercialItem2'),
        t('privacy.dataTypes.commercialItem3'),
        t('privacy.dataTypes.commercialItem4'),
      ],
    },
  ]

  const securityMeasures = [
    {
      icon: Lock,
      title: t('privacy.security.encryption'),
      description: t('privacy.security.encryptionDesc'),
    },
    {
      icon: Shield,
      title: t('privacy.security.servers'),
      description: t('privacy.security.serversDesc'),
    },
    {
      icon: Database,
      title: t('privacy.security.backups'),
      description: t('privacy.security.backupsDesc'),
    },
    {
      icon: Eye,
      title: t('privacy.security.monitoring'),
      description: t('privacy.security.monitoringDesc'),
    },
  ]

  const userRights = [
    {
      icon: Eye,
      title: t('privacy.rights.access'),
      description: t('privacy.rights.accessDesc'),
    },
    {
      icon: Settings,
      title: t('privacy.rights.correction'),
      description: t('privacy.rights.correctionDesc'),
    },
    {
      icon: Trash2,
      title: t('privacy.rights.deletion'),
      description: t('privacy.rights.deletionDesc'),
    },
    {
      icon: Download,
      title: t('privacy.rights.portability'),
      description: t('privacy.rights.portabilityDesc'),
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('privacy.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('privacy.subtitle')}
          </p>
          <div className="mt-8 p-4 bg-sky-100 dark:bg-blue-900/20 rounded-lg border border-sky-300 dark:border-blue-800">
            <p className="text-sky-800 dark:text-blue-200 font-medium">
              <strong>{t('privacy.lastUpdated')}</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t('privacy.intro.title')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                {t('privacy.intro.desc1')}
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('privacy.intro.desc2')}
              </p>
            </div>
          </div>

          {/* Privacy Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {privacySections.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
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

          {/* Data Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('privacy.dataTypes.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {type.title}
                  </h3>
                  <ul className="space-y-2">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 rtl:mr-0 rtl:ml-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Security Measures */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('privacy.security.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <measure.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {measure.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {measure.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* User Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('privacy.rights.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userRights.map((right, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                      <right.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {right.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {right.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-2xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t('privacy.contactSection.title')}</h2>
            <p className="text-purple-100 mb-6">
              {t('privacy.contactSection.desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@mtajercom.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <FileText className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                {t('privacy.contactSection.email')}
              </a>
              <a
                href="/support"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors duration-200"
              >
                <Bell className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                {t('nav.support')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
