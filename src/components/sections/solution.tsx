'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SavingsCalculator } from '@/components/ui/savings-calculator';
import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactElement;
  color: string;
}



const FEATURES: Feature[] = [
  {
    title: 'Proactive Location Reminders',
    description: 'GPS-triggered notifications when near stores where you have gift cards. Never forget to use your cards again.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'AI-Powered Optimal Selection',
    description: 'Smart engine analyzes expiration dates, balances, and merchant restrictions to recommend the best card for maximum savings.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Smart Waste Prevention',
    description: 'Weekly expiration alerts, low balance warnings, and suggestions to consolidate or transfer cards before they expire.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'One-Tap Fast Payment',
    description: 'Enter a store → get card recommendation → one tap to scan barcode. Complete transaction in under 30 seconds.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'bg-orange-100 text-orange-600',
  },
];

// Animation constants to eliminate magic numbers
const ANIMATION_CONFIG = {
  duration: 0.8,
  delay: 0.3,
};

// Icon component to eliminate repetitive SVG code
export function Solution() {
  // Schema.org structured data for SoftwareApplication and Organization
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PayYoyo Wallet",
    "applicationCategory": "FinancialApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free to use autonomous payment platform"
    },
    "description": "AI-powered autonomous payment platform that eliminates payment friction through GPS intelligence and machine learning optimization for gift card payments.",
    "url": "https://PayYoyo Wallet.com",
    "creator": {
      "@type": "Organization",
      "name": "PayYoyo Wallet",
      "url": "https://PayYoyo Wallet.com",
      "description": "Revolutionary AI-powered payment automation platform"
    },
    "featureList": [
      "GPS-triggered automation within 10 meters",
      "AI-powered gift card intelligence",
      "Zero user input required",
      "Bank-level security (PCI DSS Level 1)"
    ],
    "screenshot": "https://PayYoyo Wallet.com/images/screenshot.png"
  };

  // Breadcrumb navigation schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://PayYoyo Wallet.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solution",
        "item": "https://PayYoyo Wallet.com#solution"
      }
    ]
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section
        id="solution"
        className="py-20 bg-white"
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta itemProp="name" content="AI-Powered Autonomous Payment Solution" />
        <meta itemProp="description" content="Experience revolutionary payment automation with PayYoyo Wallet's GPS-triggered AI intelligence that analyzes and optimizes gift card payments automatically." />
        <meta itemProp="areaServed" content="Global" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Revolutionary Solution
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your Personal Gift Card Assistant
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                PayYoyo automatically finds the best gift cards to use when you&apos;re shopping. No more forgotten cards, no more manual searching - just seamless payments that save you money.
              </p>
            </motion.div>
          </header>

        {/* User Flow Demo */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Real-Life Example</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See PayYoyo in action with this everyday scenario</p>
          </motion.div>

          {/* Timeline Flow */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Step 1: Setup */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500"
              >
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Setup Cards</h4>
                  <p className="text-gray-600">User adds Starbucks, Walmart, and Best Buy cards. App automatically syncs balances.</p>
                  <div className="flex items-center space-x-2 mt-2 text-sm text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>• Starbucks: $25.50 • Walmart: $47.80 • Best Buy: $89.20</span>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Location Detection */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500"
              >
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Location Detection</h4>
                  <p className="text-gray-600">User walks into Starbucks. App detects location via GPS/geofencing.</p>
                  <div className="flex items-center space-x-2 mt-2 text-sm text-green-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>• Starbucks detected 1.2km away • GPS active</span>
                  </div>
                </div>
              </motion.div>

              {/* Step 3: Smart Popup */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500"
              >
                <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Notification</h4>
                  <p className="text-gray-600">App pops up: &quot;You have $25.50 left on your Starbucks card — tap to scan.&quot;</p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">💳</span>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">You have $25.50 left on your Starbucks card — tap to scan</p>
                        <p className="text-gray-500 text-xs">Expires Mar 2026 • You&apos;ll save $2.85</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 4: Payment & Recording */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500"
              >
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Automatic Payment</h4>
                  <p className="text-gray-600">User scans barcode at POS → balance updated automatically ($25.50 → $22.08).</p>
                  <div className="bg-blue-50 p-4 rounded-lg mt-2">
                    <div className="flex items-center justify-start space-x-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium text-gray-900">Transaction recorded: $3.42 coffee purchase</p>
                          <p className="text-gray-500 text-xs">Starbucks Balance: $22.08 (${"$"}3.42 used)</p>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded-lg border">
                        <Image
                          src="/tim-hortons-qr.webp"
                          alt="Tim Hortons QR Code Example"
                          width={28}
                          height={36}
                          className="w-7 h-9 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Savings Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-xl p-8 text-center text-white"
            >
              <h4 className="text-2xl font-bold mb-4">Result: Money Saved!</h4>
              <p className="text-xl opacity-90">User saves $2.85 vs paying with credit card (typically earns 11% cashback)</p>
              <div className="grid grid-cols-3 gap-6 mt-6">
                <div>
                  <p className="text-3xl font-bold">$2.85</p>
                  <p className="text-sm opacity-75">Savings Today</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">636</p>
                  <p className="text-sm opacity-75">Annual Savings</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">-50%</p>
                  <p className="text-sm opacity-75">Card Waste</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>





        {/* Core Value Proposition */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Not Just a Wallet — Your Smart Gift Card Manager
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              PayYoyo transforms static gift card storage into an intelligent, proactive system that actively works for you.
            </p>
          </motion.div>

          {/* Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative">
                <div className="text-4xl mb-4">📍</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Location Awareness</h4>
                <p className="text-gray-700 leading-relaxed">
                  GPS-triggered recommendations when you enter stores. No more forgetting to use your cards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Smart Recommendations</h4>
                <p className="text-gray-700 leading-relaxed">
                  AI analyzes expiration dates, balances, and merchant restrictions to suggest optimal cards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Waste Prevention</h4>
                <p className="text-gray-700 leading-relaxed">
                  Weekly alerts for expiring cards, low balance warnings, and consolidation suggestions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Rapid Payments</h4>
                <p className="text-gray-700 leading-relaxed">
                  One-tap barcode scanning completes transactions in under 30 seconds.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-teal-200 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Maximum Savings</h4>
                <p className="text-gray-700 leading-relaxed">
                  Prioritizes expiring cards and maximizes value to minimize waste and save money.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-pink-200 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
              <div className="relative">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Zero Friction</h4>
                <p className="text-gray-700 leading-relaxed">
                  Seamless experience from location detection to payment completion - no manual work required.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Core Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] rounded-2xl p-8 md:p-12 text-center text-white mb-16"
          >
            <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
            <p className="text-xl opacity-90 mb-6">
              Transform gift card management from a passive storage problem into an intelligent, automated solution that actively saves you money and time.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-3xl font-bold">$636</p>
                <p className="text-sm opacity-75">Average Annual Savings</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50%</p>
                <p className="text-sm opacity-75">Reduction in Card Waste</p>
              </div>
              <div>
                <p className="text-3xl font-bold">30s</p>
                <p className="text-sm opacity-75">Average Transaction Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold">90%+</p>
                <p className="text-sm opacity-75">Card Utilization Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              🏆 Ready to Stop Wasting Money on Gift Cards?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Calculate your potential savings and download PayYoyo today
            </p>
            <SavingsCalculator />
          </motion.div>
        </section>

        {/* Key Features */}
        <section
          className="mb-20"
          role="region"
          aria-labelledby="features-heading"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_CONFIG.duration }}
          >
            <h3 id="features-heading" className="text-2xl font-bold text-center text-gray-900 mb-12">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FEATURES.map((feature: Feature, index: number) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: ANIMATION_CONFIG.duration, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                    role="img"
                    aria-label={`${feature.title} icon`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Experience the Transformation</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-2">From painful manual processes to effortless automation</p>
            <p className="text-sm text-gray-500 max-w-xl mx-auto">Based on industry benchmarks: average users spend 3-5 minutes per transaction manually, vs 30 seconds with AI automation (Statista Consumer Behavior Report 2024)</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 text-sm font-bold">✗</span>
                </div>
                <h4 className="font-semibold text-gray-900">Manual Process</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Search through multiple gift cards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Manually check balances and expiration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Calculate optimal card combinations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  3-5 minutes per transaction
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#10B981]/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#10B981] text-sm font-bold">✓</span>
                </div>
                <h4 className="font-semibold text-gray-900">PayYoyo Wallet Automation</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></span>
                  GPS-triggered analysis
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></span>
                  AI-optimal card selection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></span>
                  One-click confirmation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></span>
                  Under 30 seconds per transaction
                </li>
              </ul>
            </div>
          </div>
        </motion.div>




      </div>
    </section>
    </>
  );
}
