'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { TrendingUp, DollarSign, Zap, CheckCircle, Star, Globe, Settings, Download } from 'lucide-react'

export default function ProjectPage() {
  const { t } = useLanguage()


  const techStack = [
    { name: t('project.frontend'), technologies: ['React Native', 'TypeScript', 'Redux'] },
    { name: t('project.backend'), technologies: ['Node.js', 'Express', 'MongoDB'] },
    { name: t('project.payment'), technologies: ['PayTabs', 'Stripe', 'Bank Transfer'] },
    { name: t('project.infrastructure'), technologies: ['AWS', 'CloudFlare', 'SSL'] },
  ]

  const revenueModel = [
    {
      plan: t('project.basicPlan'),
      price: '15 BHD',
      features: [t('project.100Products'), t('project.5Employees'), t('project.1GBStorage')],
    },
    {
      plan: t('project.advancedPlan'),
      price: '35 BHD',
      features: [t('project.500Products'), t('project.15Employees'), t('project.5GBStorage')],
    },
    {
      plan: t('project.professionalPlan'),
      price: '75 BHD',
      features: [t('project.unlimitedProducts'), t('project.50Employees'), t('project.20GBStorage')],
    },
    {
      plan: t('project.enterprisePlan'),
      price: '150 BHD',
      features: [t('project.everythingUnlimited'), t('project.unlimitedUsers'), t('project.unlimitedStorage')],
    },
  ]

  const targetMarket = [
    {
      segment: t('project.smallMerchants'),
      description: t('project.smallMerchantsDesc'),
      potential: '500+ تاجر محتمل',
    },
    {
      segment: t('project.startups'),
      description: t('project.startupsDesc'),
      potential: '200+ شركة',
    },
    {
      segment: t('project.enterprises'),
      description: t('project.enterprisesDesc'),
      potential: '50+ مؤسسة',
    },
  ]

  const competitiveAdvantages = [
    t('project.advantage1'),
    t('project.advantage2'),
    t('project.advantage3'),
    t('project.advantage4'),
    t('project.advantage5'),
    t('project.advantage6'),
  ]

  const financialNeeds = [
    {
      category: t('project.development'),
      amount: '50,000 BHD',
      description: t('project.developmentDesc'),
    },
    {
      category: t('project.marketing'),
      amount: '30,000 BHD',
      description: t('project.marketingDesc'),
    },
    {
      category: t('project.operations'),
      amount: '20,000 BHD',
      description: t('project.operationsDesc'),
    },
  ]

  const risks = [
    {
      risk: t('project.risk1'),
      mitigation: t('project.mitigation1'),
    },
    {
      risk: t('project.risk2'),
      mitigation: t('project.mitigation2'),
    },
    {
      risk: t('project.risk3'),
      mitigation: t('project.mitigation3'),
    },
  ]

  const stats = [
    { number: '100%', label: t('project.productionReady') },
    { number: '3', label: t('project.platforms') },
    { number: '50+', label: t('project.features') },
    { number: '∞', label: t('project.stores') },
  ]

  const marketProblems = [
    t('project.problem1'),
    t('project.problem2'),
    t('project.problem3'),
    t('project.problem4'),
  ]

  const solutions = [
    {
      icon: Zap,
      title: t('project.solution1'),
      description: t('project.solution1Desc'),
    },
    {
      icon: DollarSign,
      title: t('project.solution2'),
      description: t('project.solution2Desc'),
    },
    {
      icon: Settings,
      title: t('project.solution3'),
      description: t('project.solution3Desc'),
    },
    {
      icon: Download,
      title: t('project.solution4'),
      description: t('project.solution4Desc'),
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-all duration-500" suppressHydrationWarning>
      {/* Cover Page */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-sky-600 via-blue-600 to-cyan-700 dark:from-purple-600 dark:via-blue-600 dark:to-indigo-700 text-white transition-all duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="py-20">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              🛍️ {t('project.storeName')}
            </h1>
            <div className="text-2xl md:text-3xl mb-4 font-light">
              {t('project.subtitle')}
            </div>
            <div className="text-xl md:text-2xl mb-6 font-light">
              Smart White Label E-commerce Platform
            </div>
            <div className="text-lg md:text-xl mb-8 italic opacity-90">
              &ldquo;{t('project.tagline')}&rdquo;
            </div>
            <p className="text-lg">
              {t('project.presentationDate')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Summary */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              📋 {t('project.executiveSummary')}
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {t('project.executiveSummaryContent')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('project.executiveSummaryContent2')}
              </p>
            </div>
          </div>

          {/* Investment Opportunity */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              🎯 {t('project.investmentOpportunity')}
            </h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('project.marketProblem')}
              </h3>
              <ul className="space-y-4">
                {marketProblems.map((problem, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 rtl:mr-0 rtl:ml-4 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-lg">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('project.ourSolution')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                        <solution.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {solution.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Mechanics */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              🏗️ {t('project.systemMechanics')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  1️⃣ {t('project.forInvestor')}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{t('project.investorPoint1')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{t('project.investorPoint2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{t('project.investorPoint3')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{t('project.investorPoint4')}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  2️⃣ {t('project.forMerchant')}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{t('project.merchantPoint1')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{t('project.merchantPoint2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{t('project.merchantPoint3')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{t('project.merchantPoint4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('project.techStack')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((stack, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {stack.name}
                  </h3>
                  <div className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Revenue Model */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('project.revenueModel')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {revenueModel.map((plan, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {plan.plan}
                  </h3>
                  <div className="text-2xl font-bold text-purple-600 mb-4">
                    {plan.price}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 rtl:mr-0 rtl:ml-2" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Target Market */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('project.targetMarket')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {targetMarket.map((market, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {market.segment}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {market.description}
                  </p>
                  <div className="text-sm font-medium text-purple-600">
                    {market.potential}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competitive Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('project.competitiveAdvantages')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {advantage}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Needs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('project.financialNeeds')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financialNeeds.map((need, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {need.category}
                  </h3>
                  <div className="text-2xl font-bold text-purple-600 mb-2">
                    {need.amount}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {need.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Risks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('project.risks')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {risks.map((risk, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2">
                    {risk.risk}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {risk.mitigation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 rounded-2xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">{t('project.ctaTitle')}</h2>
            <p className="text-purple-100 mb-6">
              {t('project.ctaSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:investors@codebh.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <DollarSign className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                {t('project.contactInvestors')}
              </a>
              <a
                href="https://codebh.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors duration-200"
              >
                <Globe className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                {t('project.tryDemo')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}