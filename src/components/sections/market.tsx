'use client';

import { motion } from 'framer-motion';

export function Market() {
  const marketStats = [
    {
      value: '$364B',
      label: 'Global Gift Card Market',
      sublabel: 'Total Addressable Market',
    },
    {
      value: '$127B',
      label: 'US & EU Markets',
      sublabel: 'Serviceable Addressable Market',
    },
    {
      value: '$21B',
      label: 'Available Opportunity',
      sublabel: '3-Year Target Market',
    },
    {
      value: '$15.2B',
      label: 'Annual Waste',
      sublabel: "PayYoyo Wallet's Impact Target",
    },
  ];

  const segments = [
    {
      title: 'Urban Professionals',
      size: '5.2M',
      description: 'Tech-savvy professionals in Toronto, Vancouver, Montreal',
      opportunity: '$180/year average savings',
      icon: '🏙️',
    },
    {
      title: 'Family Households',
      size: '3.8M',
      description: 'Dual-income families managing household gift cards',
      opportunity: '$240/year household savings',
      icon: '🏡',
    },
    {
      title: 'Small & Medium Businesses',
      size: '12K',
      description: 'Canadian SMBs distributing gift cards to employees',
      opportunity: '$85K annual corporate savings',
      icon: '🏢',
    },
  ];

  const growth = [
    {
      year: '2026',
      mrr: '$25',
      users: '50K',
      revenue: '$3.6M',
      description: 'Initial Canadian market entry',
    },
    {
      year: '2027',
      mrr: '$55',
      users: '250K',
      revenue: '$19.8M',
      description: 'Rapid adoption and partnerships',
    },
    {
      year: '2028',
      mrr: '$120',
      users: '800K',
      revenue: '$86.4M',
      description: 'Cross-border expansion',
    },
    {
      year: '2029',
      mrr: '$250',
      users: '2.1M',
      revenue: '$252M',
      description: 'Market consolidation and growth',
    },
    {
      year: '2030',
      mrr: '$450',
      users: '4.5M',
      revenue: '$486M',
      description: 'Dominant Canadian financial tech platform',
    },
  ];

  return (
    <section id="market" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-[#F59E0B]/10 text-[#F59E0B] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Market Opportunity
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Massive Market Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The gift card industry is huge, but most cards go unused. We&apos;re solving a real problem that affects millions of people and costs billions every year.
            </p>
          </motion.div>
        </div>

        {/* Market Size Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {marketStats.map((stat) => (
            <div key={stat.label} className="text-center bg-gray-50 rounded-xl p-8">
              <div className="text-4xl font-bold text-[#1E40AF] mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>

        {/* Market Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Market data based on industry research and analysis
          </div>
        </motion.div>

        {/* Target Segments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Target Segments & Economics</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#1E40AF]/10 text-[#1E40AF] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {segment.icon === '🏙️' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                    {segment.icon === '🏡' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                    {segment.icon === '🏢' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                  </svg>
                </div>
                <div className="text-2xl font-bold text-[#1E40AF] mb-2">{segment.size}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{segment.title}</h4>
                <p className="text-gray-600 mb-4">{segment.description}</p>
                <div className="bg-[#10B981]/10 text-[#10B981] px-3 py-1 rounded-full text-sm font-semibold inline-block">
                  {segment.opportunity} savings potential
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Projections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-16">Canadian Market Growth Trajectory (2026-2030)</h3>

          {/* Compact Growth Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {growth.map((year, index) => (
              <motion.div
                key={year.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#3B82F6] to-[#10B981] rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-lg font-bold text-white">{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{year.year}</h4>
                  <p className="text-xs text-gray-600 capitalize leading-tight">{year.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#1E40AF]">{year.users}</div>
                    <div className="text-xs text-gray-600 font-medium">Users</div>
                  </div>

                  <div className="text-center">
                    <div className="text-xl font-bold text-[#10B981]">{year.mrr}</div>
                    <div className="text-xs text-gray-600 font-medium">MRR</div>
                  </div>

                  <div className="text-center pt-3 border-t border-gray-200">
                    <div className="text-sm font-bold text-[#8B5CF6]">{year.revenue}</div>
                    <div className="text-xs text-gray-600">Annual Revenue</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>



          <p className="text-center text-sm text-gray-500 mt-8">
            *Conservative projections based on Canadian market potential of 40M users over 5 years
          </p>
        </motion.div>

        {/* Competitive Moat */}
        <motion.div
          id="advantage"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-[#1E40AF] to-[#3730A3] rounded-2xl p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why We&apos;re Different</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We&apos;re building something unique that solves real problems in a way no one else can match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'First to Market',
                description: 'We\'re the first company to use AI and location data to automatically manage gift cards',
                icon: '🤖',
                metric: 'Unique approach'
              },
              {
                title: 'Growing Network',
                description: 'More merchants and users means better value for everyone involved',
                icon: '🔄',
                metric: 'Network effects'
              },
              {
                title: 'Trusted & Secure',
                description: 'Bank-level security ensures your financial data stays completely protected',
                icon: '🛡️',
                metric: 'Enterprise-grade'
              },
              {
                title: 'Lightning Fast',
                description: 'Instant processing means no waiting - just seamless payments',
                icon: '⚡',
                metric: 'Sub-second'
              },
              {
                title: 'Smart Insights',
                description: 'AI learns your preferences to make better gift card recommendations',
                icon: '📊',
                metric: 'Personalized'
              },
              {
                title: 'Strong Partnerships',
                description: 'Working directly with major retailers to expand acceptance',
                icon: '🤝',
                metric: 'Growing reach'
              },
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{advantage.title}</h4>
                <p className="text-sm opacity-90 mb-3">{advantage.description}</p>
                <div className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block">
                  {advantage.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
