'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 animated-gradient"></div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center mb-8"
            >
              <div className="glass rounded-full px-6 py-3 backdrop-blur-xl">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-white">AI-Powered Payment Revolution</span>
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Never Lose</span>
                <br />
                <span className="gradient-text text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Gift Card Value
                </span>
                <br />
                <span className="text-white">Again</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Your smart wallet pops up when you&apos;re near a store, shows all your gift cards, finds the best discounts, applies promo codes automatically, and ensures you always save the most — effortlessly.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="glass rounded-2xl p-4 backdrop-blur-xl">
                <div className="text-3xl font-bold gradient-text">$636</div>
                <div className="text-xs text-gray-400 mt-1">Avg. Savings</div>
              </div>
              <div className="glass rounded-2xl p-4 backdrop-blur-xl">
                <div className="text-3xl font-bold gradient-text">2.5K+</div>
                <div className="text-xs text-gray-400 mt-1">Beta Users</div>
              </div>
              <div className="glass rounded-2xl p-4 backdrop-blur-xl">
                <div className="text-3xl font-bold gradient-text">4.9★</div>
                <div className="text-xs text-gray-400 mt-1">Rating</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={handleGetEarlyAccess}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/75 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Get Early Access</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={handleWatchDemo}
                className="px-8 py-4 glass rounded-full text-white font-semibold text-lg backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Watch Demo →
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bank-level security</span>
              </div>
            </motion.div>
          </div>

          {/* Right column - Modern Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-[320px]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl"></div>

              {/* Phone Frame */}
              <div className="relative glass rounded-[3rem] p-2 backdrop-blur-2xl border-2 border-white/20">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="h-6 bg-black rounded-b-2xl w-40 mx-auto"></div>

                  {/* Phone Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-bold text-lg">PayYoYo Wallet</h3>
                      <div className="glass rounded-full p-2">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                      </div>
                    </div>

                    {/* Location Card */}
                    <div className="glass rounded-2xl p-4 backdrop-blur-xl border border-purple-500/30">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">You&apos;re near Starbucks!</p>
                          <p className="text-gray-400 text-xs">50m away</p>
                        </div>
                      </div>
                    </div>

                    {/* Cards Section */}
                    <div className="space-y-3">
                      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">Available Cards</p>

                      {/* Starbucks Card */}
                      <motion.div
                        className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-4 shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-xs text-green-100">Starbucks</p>
                            <p className="text-yellow-100 text-lg font-bold">$25.50</p>
                          </div>
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">☕</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Visa Card */}
                      <motion.div
                        className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 shadow-lg opacity-60"
                        whileHover={{ scale: 1.02, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-xs text-blue-100">Visa</p>
                            <p className="text-gray-200 text-xs">****4532</p>
                          </div>
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                            <span className="text-xl">💳</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all">
                      Pay with Starbucks Card
                    </button>
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
