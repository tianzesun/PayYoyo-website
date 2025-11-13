'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function DealzyPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const cartTotal = 127.43;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const sampleCartItems = [
    { name: 'Organic Bananas', price: 3.99 },
    { name: 'Whole Milk 2%', price: 4.49 },
    { name: 'Bread - Sourdough', price: 5.99 },
    { name: 'Avocados', price: 2.99 },
    { name: 'Chicken Breast', price: 12.99 },
    { name: 'Tomatoes', price: 4.99 },
    { name: 'Yogurt - Greek', price: 6.49 },
    { name: 'Eggs - Dozen', price: 7.99 },
    { name: 'Apples', price: 4.49 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Dealzy Checkout</h1>
            <p className="text-sm opacity-90">Smart Grocery Shopping</p>
          </div>
          <div className="text-right">
            <p className="text-sm">{currentTime.toLocaleDateString()}</p>
            <p className="text-lg font-bold">{currentTime.toLocaleTimeString()}</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Your Items</h2>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {sampleCartItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded"
                  >
                    <span className="font-medium">{item.name}</span>
                    <span className="font-bold">${item.price.toFixed(2)}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total: ${cartTotal.toFixed(2)}</span>
                  <span className="text-green-600">Savings: $12.57</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="space-y-6">

            {/* Main Checkout QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-bold mb-4 text-center">Scan to Pay</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <div className="flex justify-center mb-4">
                  {/* Large Barcode for Payment */}
                  <div className="flex items-end space-x-1">
                    {/* 16-digit barcode representing payment code */}
                    <div className="w-0.5 h-16 bg-black"></div>
                    <div className="w-0.5 h-14 bg-black"></div>
                    <div className="w-0.5 h-12 bg-black"></div>
                    <div className="w-0.5 h-16 bg-black"></div>
                    <div className="w-0.5 h-10 bg-black"></div>
                    <div className="w-0.5 h-14 bg-black"></div>
                    <div className="w-0.5 h-12 bg-black"></div>
                    <div className="w-0.5 h-16 bg-black"></div>
                    <div className="w-0.5 h-6 bg-white"></div>
                    <div className="w-0.5 h-14 bg-black"></div>
                    <div className="w-0.5 h-12 bg-black"></div>
                    <div className="w-0.5 h-16 bg-black"></div>
                    <div className="w-0.5 h-8 bg-black"></div>
                    <div className="w-0.5 h-14 bg-black"></div>
                    <div className="w-0.5 h-10 bg-black"></div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mb-2">Payment Code: 1234-5678-9012-3456</p>
                <p className="text-center text-xs text-gray-500">Present this to your cashier for instant checkout</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-green-600">Ready to Scan</p>
              </div>
            </motion.div>

            {/* Membership Rewards QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-lg font-bold mb-4 text-center">Member Rewards</h3>
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <div className="flex justify-center mb-3">
                  {/* Membership QR Code - Smaller */}
                  <div className="bg-white p-2 rounded">
                    <svg width="100" height="100" viewBox="0 0 40 40" className="bg-white">
                      {/* Simplified QR code grid for membership */}
                      <rect x="0" y="0" width="40" height="40" fill="white"/>
                      {/* Corner patterns */}
                      <rect x="0" y="0" width="6" height="2" fill="black"/>
                      <rect x="0" y="0" width="2" height="6" fill="black"/>
                      <rect x="4" y="0" width="2" height="6" fill="black"/>
                      <rect x="0" y="4" width="6" height="2" fill="black"/>
                      <rect x="2" y="2" width="2" height="2" fill="black"/>
                      {/* Top-right */}
                      <rect x="34" y="0" width="6" height="2" fill="black"/>
                      <rect x="38" y="0" width="2" height="6" fill="black"/>
                      <rect x="34" y="4" width="6" height="2" fill="black"/>
                      <rect x="36" y="2" width="2" height="2" fill="black"/>
                      {/* Bottom-left */}
                      <rect x="0" y="34" width="6" height="2" fill="black"/>
                      <rect x="0" y="38" width="2" height="6" fill="black"/>
                      <rect x="4" y="34" width="2" height="6" fill="black"/>
                      <rect x="0" y="36" width="6" height="2" fill="black"/>
                      <rect x="2" y="36" width="2" height="2" fill="black"/>
                      {/* Data patterns */}
                      <rect x="10" y="2" width="2" height="2" fill="black"/>
                      <rect x="12" y="2" width="2" height="2" fill="black"/>
                      <rect x="16" y="6" width="2" height="2" fill="black"/>
                      <rect x="18" y="6" width="2" height="2" fill="black"/>
                      <rect x="20" y="6" width="2" height="2" fill="black"/>
                      <rect x="2" y="10" width="2" height="2" fill="black"/>
                      <rect x="4" y="10" width="2" height="2" fill="black"/>
                      <rect x="6" y="10" width="2" height="2" fill="black"/>
                      <rect x="28" y="14" width="2" height="2" fill="black"/>
                      <rect x="30" y="14" width="2" height="2" fill="black"/>
                      <rect x="24" y="18" width="2" height="2" fill="black"/>
                      <rect x="26" y="18" width="2" height="2" fill="black"/>
                      <rect x="8" y="22" width="2" height="2" fill="black"/>
                      <rect x="10" y="22" width="2" height="2" fill="black"/>
                      <rect x="14" y="26" width="2" height="2" fill="black"/>
                      <rect x="16" y="26" width="2" height="2" fill="black"/>
                    </svg>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-red-800 mb-1">Scan for Rewards</p>
                  <p className="text-xs text-red-600">Earn points on every purchase</p>
                  <div className="flex items-center justify-center mt-2 space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">850 points earned today</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h4 className="font-semibold mb-3">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-600 transition-colors">
                  Add Item
                </button>
                <button className="bg-green-500 text-white py-2 px-4 rounded text-sm font-medium hover:bg-green-600 transition-colors">
                  Apply Coupon
                </button>
                <button className="bg-orange-500 text-white py-2 px-4 rounded text-sm font-medium hover:bg-orange-600 transition-colors">
                  Split Payment
                </button>
                <button className="bg-purple-500 text-white py-2 px-4 rounded text-sm font-medium hover:bg-purple-600 transition-colors">
                  Member Login
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-bold mb-4">Need Help?</h5>
              <p className="text-sm text-gray-600 mb-2">Call Customer Service</p>
              <p className="text-sm font-medium">1-800-DEALZY</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <div className="space-y-1 text-sm text-gray-600">
                <p><a href="#" className="hover:text-blue-600">Store Locator</a></p>
                <p><a href="#" className="hover:text-blue-600">Weekly Deals</a></p>
                <p><a href="#" className="hover:text-blue-600">Recipe Ideas</a></p>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-4">Powered by</h5>
              <Image
                src="/tim-hortons-qr.webp"
                alt="PayYoYo"
                width={120}
                height={32}
                className="h-8 mx-auto opacity-75"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
