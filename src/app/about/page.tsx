'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-gradient-to-r from-[#1E40AF] via-[#3B82F6] to-[#1D4ED8] bg-clip-text">PayYoYo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our mission is to revolutionize personal finance through AI-powered autonomous payments, making saving effortless and maximizing every dollar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8 lg:mb-0"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                PayYoYo was founded in 2025 by AydenAIT Solutions with a vision to eliminate the friction and waste associated with traditional payment methods, especially gift cards. We saw a world where consumers were constantly losing value due to forgotten cards, expired balances, and missed discounts.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Leveraging cutting-edge AI and GPS technology, we set out to create a smart wallet that not only stores your payment methods but actively manages them to ensure optimal utilization and maximum savings. Our journey is driven by a passion for empowering individuals to spend smarter and live richer.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Story"
                width={800}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate innovators, engineers, and fintech experts united in our mission to revolutionize personal payments through AI
            </p>
          </motion.div>

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  name: 'Dr. Alexandra Chen',
                  title: 'CEO & Co-Founder',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Alexandra',
                  background: 'Former VP of AI at Coinbase. PhD in Computer Science from Stanford. 12+ years building financial technology solutions.',
                  linkedin: 'https://linkedin.com/in/alexandra-chen',
                  experience: 'Previously led AI initiatives at major fintech companies, including Visa and PayPal.'
                },
                {
                  name: 'Marcus Patel',
                  title: 'CTO & Co-Founder',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Marcus',
                  background: 'Former Principal Engineer at Stripe. Masters in Computer Science from MIT. Expert in distributed systems and machine learning.',
                  linkedin: 'https://linkedin.com/in/marcus-patel',
                  experience: 'Built high-throughput payment systems handling $2B+ in monthly transactions.'
                },
                {
                  name: 'Dr. Sophia Rodriguez',
                  title: 'Chief AI Officer',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Sophia',
                  background: 'Former Head of ML at Bank of America. PhD in Machine Learning from Carnegie Mellon. Published 20+ papers on financial AI.',
                  linkedin: 'https://linkedin.com/in/sophia-rodriguez',
                  experience: 'Led machine learning teams at JPMorgan Chase and Goldman Sachs.'
                },
                {
                  name: 'Michael Thompson',
                  title: 'VP of Engineering',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Michael',
                  background: 'Former Tech Lead at Uber. Masters in Software Engineering from UC Berkeley. Expert in mobile and cloud infrastructure.',
                  linkedin: 'https://linkedin.com/in/michael-thompson',
                  experience: 'Scaled engineering teams at Coinbase and Square to support millions of users.'
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-3">{member.title}</p>
                      <p className="text-gray-700 text-sm mb-3">{member.background}</p>
                      <p className="text-gray-600 text-sm italic">{member.experience}</p>
                      <div className="mt-3 flex space-x-3">
                        <a href={member.linkedin} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          LinkedIn ↗
                        </a>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500 text-sm">{member.name.split(' ')[0]}@aydenait.com</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Engineering Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Engineering & Product</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Sarah Johnson',
                  title: 'Senior ML Engineer',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Sarah',
                  background: 'Former ML Engineer at Airbnb. PhD candidate in Deep Learning.'
                },
                {
                  name: 'Ryan Kim',
                  title: 'Product Manager',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Ryan',
                  background: 'MBA from Wharton. Former PM at WhatsApp and Venmo.'
                },
                {
                  name: 'Emma Davis',
                  title: 'UI/UX Designer',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Emma',
                  background: 'Former Design Lead at Figma. CFA charterholder with finance experience.'
                },
                {
                  name: 'Carlos Morales',
                  title: 'Senior Backend Engineer',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Carlos',
                  background: 'Ex-Shopify Engineer. Expert in distributed systems and security.'
                },
                {
                  name: 'Lisa Chen',
                  title: 'Data Scientist',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=LisaChen',
                  background: 'PhD in Statistics from Harvard. Former Netflix data scientist.'
                },
                {
                  name: 'James Wilson',
                  title: 'Mobile Engineer',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=James',
                  background: 'iOS & Android expert. Former engineer at DoorDash and Robinhood.'
                },
                {
                  name: 'Maya Patel',
                  title: 'Security Engineer',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Maya',
                  background: 'Cybersecurity expert. Former CISO at fintech startups.'
                },
                {
                  name: 'Kevin Zhang',
                  title: 'DevOps Engineer',
                  image: 'https://api.dicebear.com/8.x/avataaars/svg?seed=Kevin',
                  background: 'Former infrastructure lead at Notion. AWS certified architect.'
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{member.background}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We&apos;re not just building a product — we&apos;re creating a movement to democratize financial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Innovation First',
                description: 'We push boundaries and challenge status quo in personal finance'
              },
              {
                icon: '🤝',
                title: 'User-Centric',
                description: 'Every decision starts with how it impacts our users'
              },
              {
                icon: '🔒',
                title: 'Trust & Security',
                description: 'Financial security and privacy are non-negotiable'
              },
              {
                icon: '🌍',
                title: 'Global Impact',
                description: 'Creating positive change in how the world manages money'
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
