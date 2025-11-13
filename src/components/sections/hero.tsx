'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Modal } from '@/components/ui/modal';
import { SignupForm } from '@/components/ui/signup-form';
import { VideoDemo } from '@/components/ui/video-demo';

export function Hero() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleGetEarlyAccess = () => {
    setShowSignupModal(true);
  };

  const handleWatchDemo = () => {
    setShowVideoModal(true);
  };

  const closeModals = () => {
    setShowSignupModal(false);
    setShowVideoModal(false);
  };

  return (
    <section className="relative py-32 flex justify-center bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Never Lose Gift Card Value
              <span className="block text-[#1E40AF]">Again</span>
            </h1>
          </motion.div>



          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your smart wallet pops up when you&apos;re near a store, shows all your gift cards, finds the best discounts, applies promo codes automatically, and ensures you always save the most — effortlessly.
            </p>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-[#10B981] text-white p-2 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-gray-900">$636</p>
                  <p className="text-sm text-gray-600">Annual savings per user</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Proof Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-4">
              {/* User Count */}
              <div className="flex items-center space-x-2 bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="font-semibold text-sm">2,547 beta users saving money</span>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="font-semibold text-sm ml-1">4.9/5</span>
              </div>
            </div>

            {/* Testimonial Carousel */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/20">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">J</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-600 ml-1">Verified Early Access User</span>
                  </div>
                  <p className="text-sm text-gray-700 italic leading-relaxed">
                    &ldquo;PayYoYo saved me $487 in my first month. It&apos;s like having a personal shopper in my pocket.&rdquo;
                  </p>
                  <p className="text-xs text-gray-500 mt-1">- Jessica K., Vancouver</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced App Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center space-x-4">
                {/* App Store Badge */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium text-sm flex items-center space-x-2 hover:bg-gray-900 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </motion.a>

                {/* Google Play Badge */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium text-sm flex items-center space-x-2 hover:bg-gray-900 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,10.58L20.16,13L21,13.73V10.27L16.81,15.12M20.16,11L16.81,8.73L14.54,11.15L6.05,2.66L16.81,8.88L20.16,11Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* App Features Highlights */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border border-blue-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">30-Second Setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">GPS Auto-Popup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Smart AI Savings</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="px-10 py-5 text-lg font-bold shadow-2xl hover:shadow-[#1E40AF]/50" onClick={handleGetEarlyAccess}>
                🚀 Download & Start Saving $636 →
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="px-10 py-5 text-lg font-semibold border-2 hover:bg-[#1E40AF] hover:text-white hover:border-[#1E40AF]" onClick={handleWatchDemo}>
                🎥 Watch 60-Second Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            {/* Security & Trust Badges */}
            <div className="flex justify-center items-center space-x-6 mb-6">
              <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your Cards Are Safe</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Encrypted & Protected</span>
              </div>
            </div>


          </motion.div>
        </div>

          {/* Right column - Hero mockup image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block pt-8"
          >
            <div className="relative">
              {/* Main mockup image placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl p-4 shadow-2xl border border-white/50 backdrop-blur-sm max-w-sm mx-auto">
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  {/* Phone mockup */}
                  <div className="bg-gray-900 rounded-2xl p-4 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                      </div>
                      <span className="text-xs opacity-70">9:41</span>
                    </div>

                    {/* Location indicator */}
                    <div className="bg-[#1E40AF]/20 rounded-lg p-3 mb-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <svg className="w-4 h-4 text-[#1E40AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Starbucks detected 1.2km away</span>
                      </div>
                    </div>

                    {/* Payment options */}
                    <div className="space-y-3">
                      <div className="bg-green-900 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-xs text-green-100">Starbucks</p>
                            <p className="text-yellow-100 text-xs">$25.50 balance </p>
                          </div>
                          <div className="flex items-center justify-center">
                            <Image
                              src="/Starbucks.svg.png"
                              alt="Starbucks"
                              width={40}
                              height={20}
                              className="h-5 object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-500 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-xs text-gray-900">Visa</p>
                            <p className="text-gray-800 text-xs">****4532 • Exp 08/26</p>
                          </div>
                          <div className="flex items-center justify-center">
                            <Image
                              src="/Visa.svg.png"
                              alt="Visa"
                              width={40}
                              height={20}
                              className="h-5 object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-500 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-xs text-white">Mastercard</p>
                            <p className="text-gray-300 text-xs">****9876 • Exp 12/28</p>
                          </div>
                          <div className="flex items-center justify-center">
                            <Image
                              src="/Mastercard.svg.png"
                              alt="Mastercard"
                              width={40}
                              height={20}
                              className="h-5 object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ready to pay indicator */}
                   
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Card Found!</p>
                  </div>
                </div>
              </div>

            </div>

            {/* PayYoYo Cashier Scanning Interface */}
            <div className="relative mt-8">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-200 rounded-3xl p-4 shadow-2xl border border-white/50 backdrop-blur-sm max-w-sm mx-auto">
                <div className="bg-white rounded-2xl p-4 shadow-lg">
                  {/* Phone mockup - Matches first mockup style */}
                  <div className="bg-gray-900 rounded-2xl p-4 text-white">
                    <div className="flex items-center justify-between mb-4">

                      <span className="text-xs opacity-70">9:41</span>
                    </div>



                    {/* Payment QR - what cashier scans */}
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-green-600 bg-green-100 px-2 py-1 rounded text-xs">Active</div>
                        </div>

                        {/* Simplified QR Code - what cashier actually scans */}
                        <div className="flex justify-center py-2 bg-gray-50 rounded">
                          <svg width="80" height="80" viewBox="0 0 21 21" className="bg-white border border-gray-300">
                            {/* Finder patterns - black squares in corners */}
                            <rect x="0" y="0" width="5" height="5" fill="black"/>
                            <rect x="1" y="1" width="3" height="3" fill="white"/>
                            <rect x="2" y="2" width="1" height="1" fill="black"/>

                            <rect x="16" y="0" width="5" height="5" fill="black"/>
                            <rect x="17" y="1" width="3" height="3" fill="white"/>
                            <rect x="18" y="2" width="1" height="1" fill="black"/>

                            <rect x="0" y="16" width="5" height="5" fill="black"/>
                            <rect x="1" y="17" width="3" height="3" fill="white"/>
                            <rect x="2" y="18" width="1" height="1" fill="black"/>

                            {/* Random data pattern */}
                            <rect x="6" y="2" width="1" height="1" fill="black"/>
                            <rect x="8" y="2" width="1" height="1" fill="black"/>
                            <rect x="10" y="2" width="1" height="1" fill="black"/>
                            <rect x="14" y="2" width="1" height="1" fill="black"/>
                            <rect x="18" y="2" width="1" height="1" fill="black"/>

                            <rect x="2" y="6" width="1" height="1" fill="black"/>
                            <rect x="4" y="6" width="1" height="1" fill="black"/>
                            <rect x="10" y="6" width="1" height="1" fill="black"/>
                            <rect x="12" y="6" width="1" height="1" fill="black"/>
                            <rect x="16" y="6" width="1" height="1" fill="black"/>
                            <rect x="18" y="6" width="1" height="1" fill="black"/>

                            <rect x="6" y="8" width="1" height="1" fill="black"/>
                            <rect x="8" y="8" width="1" height="1" fill="black"/>
                            <rect x="12" y="8" width="1" height="1" fill="black"/>
                            <rect x="14" y="8" width="1" height="1" fill="black"/>

                            <rect x="4" y="10" width="1" height="1" fill="black"/>
                            <rect x="6" y="10" width="1" height="1" fill="black"/>
                            <rect x="12" y="10" width="1" height="1" fill="black"/>
                            <rect x="14" y="10" width="1" height="1" fill="black"/>
                            <rect x="16" y="10" width="1" height="1" fill="black"/>

                            <rect x="6" y="12" width="1" height="1" fill="black"/>
                            <rect x="8" y="12" width="1" height="1" fill="black"/>
                            <rect x="10" y="12" width="1" height="1" fill="black"/>
                            <rect x="14" y="12" width="1" height="1" fill="black"/>
                            <rect x="16" y="12" width="1" height="1" fill="black"/>

                            <rect x="2" y="14" width="1" height="1" fill="black"/>
                            <rect x="4" y="14" width="1" height="1" fill="black"/>
                            <rect x="8" y="14" width="1" height="1" fill="black"/>
                            <rect x="10" y="14" width="1" height="1" fill="black"/>
                            <rect x="14" y="14" width="1" height="1" fill="black"/>
                            <rect x="16" y="14" width="1" height="1" fill="black"/>

                            <rect x="6" y="16" width="1" height="1" fill="black"/>
                            <rect x="8" y="16" width="1" height="1" fill="black"/>
                            <rect x="10" y="16" width="1" height="1" fill="black"/>
                            <rect x="12" y="16" width="1" height="1" fill="black"/>
                            <rect x="14" y="16" width="1" height="1" fill="black"/>
                          </svg>
                        </div>

                        <div className="text-center mt-2">
                          <p className="text-xs text-gray-600">$29.95</p>
                          <p className="text-xs text-gray-500">Ready to scan</p>
                        </div>
                      </div>

                      <div className="bg-gray-700 rounded-lg p-3 opacity-60">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-xs">Rewards QR</p>
                            <p className="text-gray-300 text-xs">Member loyalty scan</p>
                          </div>
                          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                            <span className="text-gray-300 text-xs">QR</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Scan status */}
                    <div className="mt-6 text-center">
                      <p className="text-xs text-gray-400 mb-3">
                        Present payment code to cashier for instant checkout
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements - matches first mockup */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900">Scan QR Code</p>
                    <p className="text-xs text-gray-500">Instant checkout</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modals */}
      <Modal isOpen={showSignupModal} onClose={closeModals}>
        <SignupForm onClose={closeModals} />
      </Modal>

      <Modal isOpen={showVideoModal} onClose={closeModals}>
        <VideoDemo onClose={closeModals} />
      </Modal>
    </section>
  );
}
