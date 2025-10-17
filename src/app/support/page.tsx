'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Headphones, Mail, MessageCircle, Users, Store, ShoppingCart, Settings, Bug, Lightbulb, Phone, MapPin } from 'lucide-react'

export default function SupportPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('general')

  const supportStats = [
    { number: '24/7', label: t('support.stats.24_7') },
    { number: '<30', label: t('support.stats.response') },
    { number: '98%', label: t('support.stats.satisfaction') },
    { number: '+5000', label: t('support.stats.solved') },
  ]

  const contactMethods = [
    {
      icon: Mail,
      title: t('support.contactMethods.email'),
      description: t('support.contactMethods.emailDesc'),
      contact: 'support@codebh.com',
      href: 'mailto:support@codebh.com',
    },
    {
      icon: Users,
      title: t('support.contactMethods.merchants'),
      description: t('support.contactMethods.merchantsDesc'),
      contact: 'merchants@codebh.com',
      href: 'mailto:merchants@codebh.com',
    },
    {
      icon: Bug,
      title: t('support.contactMethods.bugs'),
      description: t('support.contactMethods.bugsDesc'),
      contact: 'bugs@codebh.com',
      href: 'mailto:bugs@codebh.com',
    },
    {
      icon: Lightbulb,
      title: t('support.contactMethods.suggestions'),
      description: t('support.contactMethods.suggestionsDesc'),
      contact: 'suggestions@codebh.com',
      href: 'mailto:suggestions@codebh.com',
    },
  ]

  const workingHours = [
    {
      title: t('support.workingHours.general'),
      hours: t('support.workingHours.generalHours'),
      status: t('support.workingHours.generalStatus'),
      isOpen: true,
    },
    {
      title: t('support.workingHours.merchants'),
      hours: t('support.workingHours.merchantsHours'),
      status: t('support.workingHours.merchantsStatus'),
      isOpen: true,
    },
    {
      title: t('support.workingHours.emergency'),
      hours: t('support.workingHours.emergencyHours'),
      status: t('support.workingHours.emergencyStatus'),
      isOpen: true,
    },
    {
      title: t('support.workingHours.friday'),
      hours: t('support.workingHours.fridayHours'),
      status: t('support.workingHours.fridayStatus'),
      isOpen: true,
    },
  ]

  const faqItems = [
    {
      question: t('support.faq.q1'),
      answer: t('support.faq.a1'),
    },
    {
      question: t('support.faq.q2'),
      answer: t('support.faq.a2'),
    },
    {
      question: t('support.faq.q3'),
      answer: t('support.faq.a3'),
    },
    {
      question: t('support.faq.q4'),
      answer: t('support.faq.a4'),
    },
  ]

  const supportTabs = [
    { id: 'general', label: t('support.tabs.general'), icon: Headphones },
    { id: 'merchants', label: t('support.tabs.merchants'), icon: Store },
    { id: 'customers', label: t('support.tabs.customers'), icon: ShoppingCart },
    { id: 'technical', label: t('support.tabs.technical'), icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
              <Headphones className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('support.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('support.subtitle')}
          </p>
          
          {/* Support Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {supportStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Methods */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              {t('support.contact.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {method.description}
                  </p>
                  <a
                    href={method.href}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    {method.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Working Hours */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              ساعات العمل
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workingHours.map((schedule, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {schedule.title}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-300 text-sm mb-2 whitespace-pre-line">
                    {schedule.hours}
                  </div>
                  <div className={`text-sm font-medium ${schedule.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                    {schedule.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Tabs */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center mb-8">
              {supportTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 m-2 rounded-lg font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              {activeTab === 'general' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">الدعم العام</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    نحن متاحون لمساعدتك في جميع استفساراتك العامة حول منصة CodeBH. 
                    فريقنا المدرب جاهز للإجابة على أسئلتك وتقديم المساعدة اللازمة.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <Phone className="w-6 h-6 text-green-500 mr-3 rtl:mr-0 rtl:ml-3" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">الهاتف</div>
                        <div className="text-gray-600 dark:text-gray-300">+973 3399 1916</div>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <MapPin className="w-6 h-6 text-blue-500 mr-3 rtl:mr-0 rtl:ml-3" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">العنوان</div>
                        <div className="text-gray-600 dark:text-gray-300">المنامة، البحرين</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'merchants' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">دعم التجار</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    نحن نقدر ثقتك في منصتنا ونسعى لتوفير أفضل دعم لنجاح متجرك. 
                    فريقنا المتخصص في التجارة الإلكترونية جاهز لمساعدتك في جميع مراحل إدارة متجرك.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">الاشتراك وإنشاء المتجر</h4>
                      <p className="text-blue-700 dark:text-blue-200 text-sm">
                        مساعدة في التسجيل واختيار الباقة المناسبة وإنشاء متجرك الإلكتروني
                      </p>
                    </div>
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">إدارة المنتجات</h4>
                      <p className="text-green-700 dark:text-green-200 text-sm">
                        دعم في إضافة وتعديل المنتجات وإدارة المخزون والتسعير
                      </p>
                    </div>
                    <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">معالجة الطلبات</h4>
                      <p className="text-purple-700 dark:text-purple-200 text-sm">
                        مساعدة في استقبال ومعالجة الطلبات وتتبع الشحنات
                      </p>
                    </div>
                    <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">التقارير والإحصائيات</h4>
                      <p className="text-orange-700 dark:text-orange-200 text-sm">
                        شرح التقارير المتاحة ومساعدتك في فهم أداء متجرك
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'customers' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">دعم العملاء</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    نحن ملتزمون بتوفير تجربة تسوق ممتازة ومساعدتك في كل خطوة. 
                    فريق خدمة العملاء جاهز لحل جميع استفساراتك المتعلقة بالتسوق والطلبات.
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">كيفية استخدام التطبيق</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        شرح خطوات التسجيل والوصول للمتاجر والتسوق من خلال التطبيق
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">عملية الشراء</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        دعم في إتمام الطلبات واختيار طرق الدفع والتوصيل
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">تتبع الطلبات</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        مساعدة في متابعة حالة الطلبات والاستفسار عن التوصيل
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'technical' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">الدعم التقني</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    فريقنا التقني المتخصص جاهز لحل جميع المشاكل التقنية وأخطاء التطبيق. 
                    نحن نعمل على مدار الساعة لضمان استمرارية الخدمة.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                      <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">مشاكل التطبيق</h4>
                      <p className="text-red-700 dark:text-red-200 text-sm">
                        حل مشاكل التوقف والبطء ومشاكل تسجيل الدخول
                      </p>
                    </div>
                    <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">مشاكل الإشعارات</h4>
                      <p className="text-yellow-700 dark:text-yellow-200 text-sm">
                        مساعدة في تفعيل الإشعارات وحل مشاكل الاستقبال
                      </p>
                    </div>
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">التحديثات والتثبيت</h4>
                      <p className="text-blue-700 dark:text-blue-200 text-sm">
                        دعم في تحديث التطبيق وحل مشاكل التثبيت
                      </p>
                    </div>
                    <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">الأمان والحماية</h4>
                      <p className="text-green-700 dark:text-green-200 text-sm">
                        نصائح لحماية الحساب والإبلاغ عن المشاكل الأمنية
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              الأسئلة الشائعة
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl text-white text-center">
            <h2 className="text-2xl font-bold mb-4">هل تحتاج مساعدة إضافية؟</h2>
            <p className="text-green-100 mb-6">
              لا تتردد في التواصل معنا في أي وقت. فريقنا جاهز لمساعدتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@codebh.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                إرسال رسالة
              </a>
              <a
                href="https://wa.me/97333991916"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" />
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
