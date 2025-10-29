'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function CompoundInterestCalculatorPage() {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy')

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">Snumps</span>
              </Link>
            </div>
            <Link 
              href="/"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compound Interest Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Calculate compound interest and visualize your investment growth over time.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Coming 2025
          </div>
        </div>
      </section>

      {/* Legal Documents Tabs */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors duration-200 ${
                activeTab === 'privacy'
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors duration-200 ${
                activeTab === 'terms'
                  ? 'text-green-600 border-green-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Terms and Conditions
            </button>
          </div>

          {/* Content Area */}
          <div className="prose prose-gray max-w-none">
            {activeTab === 'privacy' ? (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                <div className="text-gray-600 space-y-4">
                  <p>
                    [Privacy Policy content will go here]
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms and Conditions</h2>
                <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                <div className="text-gray-600 space-y-4">
                  <p>
                    [Terms and Conditions content will go here]
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 px-6 bg-gray-900 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Snumps</h3>
              <p className="text-gray-400 leading-relaxed">
                Creating beautiful, intuitive apps that enhance everyday life through thoughtful design and cutting-edge technology.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="/projects/blackjack-game" className="text-gray-300 hover:text-white transition-colors duration-200">Blackjack Game</a></li>
                <li><a href="/projects/points-tracker" className="text-gray-300 hover:text-white transition-colors duration-200">Points Tracker</a></li>
                <li><a href="/projects/compound-interest-calculator" className="text-gray-300 hover:text-white transition-colors duration-200">Compound Interest Calculator</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="/socials" className="text-gray-300 hover:text-white transition-colors duration-200">Socials</a></li>
                <li><Link href="/#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <p className="text-gray-400 text-center text-sm">
              © 2024 Snumps. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}