'use client'

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Snumps</span>
            </div>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Apps Built with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              YOU
            </span>
            {' '}in Mind
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We craft extraordinary mobile experiences that are fun to use and make your life easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('apps')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200"
            >
              View Our Work
            </button>
            <a 
              href="/about"
              className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four revolutionary apps designed to simplify and enhance your daily life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Blackjack Game App */}
            <a href="/projects/blackjack-game" className="block">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:border-purple-200 border border-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-14 h-14 bg-blue-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Blackjack Game</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Classic casino card game with modern design and smooth gameplay experience.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Coming 2025
                </span>
                <a 
                  href="https://apps.apple.com/app/placeholder-blackjack-game" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                >
                  Download
                </a>
                </div>
              </div>
            </a>

            {/* Points Tracker App */}
            <a href="/projects/points-tracker" className="block">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:border-purple-200 border border-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-14 h-14 bg-purple-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Points Tracker</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Track and manage your loyalty points, rewards, and membership benefits in one place.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Coming 2025
                </span>
                <a 
                  href="https://apps.apple.com/app/placeholder-points-tracker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium"
                >
                  Download
                </a>
                </div>
              </div>
            </a>

            {/* Compound Interest Calculator App */}
            <a href="/projects/compound-interest-calculator" className="block">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:border-purple-200 border border-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-14 h-14 bg-green-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compound Interest Calculator</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Calculate compound interest and visualize your investment growth over time.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Coming 2025
                </span>
                <a
                  href="https://apps.apple.com/app/placeholder-compound-interest-calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                >
                  Download
                </a>
                </div>
              </div>
            </a>

            {/* Weight Loss Assist App */}
            <a href="/projects/weight-loss-assist" className="block">
              <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg hover:border-purple-200 border border-gray-100 transition-all duration-200 cursor-pointer">
                <div className="w-14 h-14 bg-orange-100 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Weight Loss Assist</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Set your weight loss goals, track your progress, and achieve lasting results.
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Coming 2025
                </span>
                <a
                  href="https://apps.apple.com/app/placeholder-weight-loss-assist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 text-sm font-medium"
                >
                  Download
                </a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Snumps?
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We combine thoughtful design with cutting-edge technology to create apps that users love.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Simple</h3>
              <p className="text-gray-600">
                Clean, intuitive interfaces that focus on what matters most.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Useful</h3>
              <p className="text-gray-600">
                Apps designed with real users in mind, solving actual problems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable</h3>
              <p className="text-gray-600">
                Very cheap or no-cost options that everyone can access.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Small Team</h3>
              <p className="text-gray-600">
                We&apos;re a small company, not a big corporation, building apps that people love.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Have questions, suggestions, or just want to say hello? We&apos;d love to hear from you.
          </p>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Email Us
                </h3>
                <a 
                  href="mailto:Support@snumps.com" 
                  className="text-xl text-purple-600 hover:text-purple-700 font-semibold transition-colors duration-200"
                >
                  Support@snumps.com
                </a>
              </div>
              
              <p className="text-gray-600 max-w-md">
                We typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-16 pb-8 px-6 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 - Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Snumps</h3>
              <p className="text-gray-400 leading-relaxed">
                Creating beautiful, intuitive apps that enhance everyday life through thoughtful design and cutting-edge technology.
              </p>
            </div>

            {/* Column 2 - Products */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="/projects/blackjack-game" className="text-gray-300 hover:text-white transition-colors duration-200">Blackjack Game</a></li>
                <li><a href="/projects/points-tracker" className="text-gray-300 hover:text-white transition-colors duration-200">Points Tracker</a></li>
                <li><a href="/projects/compound-interest-calculator" className="text-gray-300 hover:text-white transition-colors duration-200">Compound Interest Calculator</a></li>
                <li><a href="/projects/weight-loss-assist" className="text-gray-300 hover:text-white transition-colors duration-200">Weight Loss Assist</a></li>
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
                <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="/socials" className="text-gray-300 hover:text-white transition-colors duration-200">Socials</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Column 4 - Legal */}
            <div>
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
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