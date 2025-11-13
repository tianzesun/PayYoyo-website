'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Accept PayYoyo Payments?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything merchants need to start accepting PayYoyo payments today.
          </p>
        </motion.div>

        {/* Merchant Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

          {/* Cashier Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#1E40AF] text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">PayYoyo Cashier Guide</h3>
            <p className="text-gray-600 mb-6">
              Complete step-by-step instructions for accepting PayYoyo payments at your point of sale.
            </p>
            <Button className="w-full" onClick={() => window.location.href = '/cashier-guide'}>
              View Guide
            </Button>
          </motion.div>

          {/* Merchant Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-green-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#059669] text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Merchant Benefits</h3>
            <p className="text-gray-600 mb-6">
              Learn how PayYoyo can increase your gift card redemption rates and customer satisfaction.
            </p>
            <Button variant="outline" className="w-full" onClick={() => window.location.href = '/merchant-benefits'}>
              Learn More
            </Button>
          </motion.div>

          {/* Integration Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-purple-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
          >
            <div className="w-16 h-16 bg-[#7C3AED] text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Support</h3>
            <p className="text-gray-600 mb-6">
              Get help with POS integration, troubleshooting, and merchant onboarding.
            </p>
            <Button variant="outline" className="w-full" onClick={() => {
              const email = 'merchants@PayYoyoWallet.com';
              const subject = 'Merchant Technical Support Request';
              const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

              try {
                window.open(mailtoLink, '_self');
              } catch {
                window.location.href = mailtoLink;
              }
            }}>
              Contact Support
            </Button>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-[#1E40AF] to-[#3730A3] rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Partner with PayYoyo</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Join thousands of merchants who are already increasing their gift card redemption rates and customer satisfaction with PayYoyo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
              Become a Merchant Partner
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1E40AF]">
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
