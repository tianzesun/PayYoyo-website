'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function TeamPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Backed by industry leaders from Coinbase, Stripe, Bank of America, and Goldman Sachs
          </p>
        </motion.div>

        {/* Leadership Preview */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Alexandra Chen',
                title: 'CEO & Co-Founder',
                image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Alexandra',
                company: 'Former VP of AI at Coinbase'
              },
              {
                name: 'Marcus Patel',
                title: 'CTO & Co-Founder',
                image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Marcus',
                company: 'Former Principal Engineer at Stripe'
              },
              {
                name: 'Dr. Sophia Rodriguez',
                title: 'Chief AI Officer',
                image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Sophia',
                company: 'Former Head of ML at Bank of America'
              },
            ].map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-1">{leader.title}</p>
                <p className="text-gray-600 text-sm">{leader.company}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Credibility Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { stat: '50+', label: 'Years Combined Experience' },
                { stat: '12', label: 'Team Members' },
                { stat: 'PhD', label: 'AI & Fintech Expertise' },
                { stat: '% Fortune 500', label: 'Experience' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-bold text-blue-600 mb-1">{item.stat}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1D4ED8] transition-colors shadow-lg"
            >
              Meet the Full Team →
            </motion.button>
          </Link>
          <p className="text-gray-500 text-sm mt-4">
            Discover our journey, culture, and vision for the future of payments
          </p>
        </motion.div>
      </div>
    </section>
  );
}
