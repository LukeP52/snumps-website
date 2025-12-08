'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WeightLossAssistPage() {
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
      <section className="pt-24 pb-12 px-6 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-orange-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Weight Loss Assist
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Set your weight loss goals, track your progress, and achieve lasting results with personalized guidance.
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
                  ? 'text-orange-600 border-orange-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors duration-200 ${
                activeTab === 'terms'
                  ? 'text-orange-600 border-orange-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Terms of Service
            </button>
          </div>

          {/* Content Area */}
          <div className="prose prose-gray max-w-none">
            {activeTab === 'privacy' ? (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                <p className="text-gray-600 mb-6">Last Updated: December 7, 2025</p>
                <div className="text-gray-600 space-y-4">
                  <p>Snumps LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the Weight Loss Assist mobile application (the &ldquo;App&rdquo;). This Privacy Policy explains how we collect, use, and protect your information when you use our App.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">Information We Collect</h3>

                  <h4 className="font-semibold text-gray-900 mt-4">Account Information</h4>
                  <ul className="list-disc pl-6 my-2">
                    <li>Email address (when signing up with email)</li>
                    <li>Apple ID identifier (when using Sign in with Apple)</li>
                    <li>Authentication tokens for secure login</li>
                  </ul>

                  <h4 className="font-semibold text-gray-900 mt-4">Health and Fitness Data</h4>
                  <ul className="list-disc pl-6 my-2">
                    <li>Weight measurements and tracking history</li>
                    <li>Weight loss goals and progress</li>
                    <li>Workout plans and exercise logs</li>
                    <li>Nutrition and meal tracking data</li>
                    <li>Daily goals and completion status</li>
                    <li>Achievement and milestone data</li>
                  </ul>

                  <h4 className="font-semibold text-gray-900 mt-4">Photos</h4>
                  <ul className="list-disc pl-6 my-2">
                    <li>Progress photos you choose to upload</li>
                    <li>Photos are stored securely in the cloud and associated with your account</li>
                  </ul>

                  <h4 className="font-semibold text-gray-900 mt-4">Subscription Information</h4>
                  <ul className="list-disc pl-6 my-2">
                    <li>Purchase history and subscription status</li>
                    <li>Transaction identifiers (processed by Apple and RevenueCat)</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">How We Use Your Information</h3>
                  <p>We use your information to:</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Provide and maintain the App&apos;s functionality</li>
                    <li>Sync your data across your devices</li>
                    <li>Process and manage your subscription</li>
                    <li>Track your weight loss progress and goals</li>
                    <li>Send password reset emails (if requested)</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">Data Storage and Security</h3>
                  <p>Your data is stored securely using:</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Firebase Authentication - for secure account management</li>
                    <li>Firebase Firestore - for storing your health and fitness data</li>
                    <li>Firebase Storage - for storing your progress photos</li>
                  </ul>
                  <p>All data is transmitted using industry-standard encryption (TLS/SSL) and stored on secure servers.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">Third-Party Services</h3>
                  <p>We use the following third-party services to operate the App:</p>
                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">Service</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">Purpose</th>
                          <th className="px-4 py-2 text-left text-sm font-semibold text-gray-900 border-b">Privacy Policy</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b">Firebase (Google)</td>
                          <td className="px-4 py-2 border-b">Authentication, database, storage, analytics</td>
                          <td className="px-4 py-2 border-b"><a href="https://firebase.google.com/support/privacy" className="text-orange-600 hover:text-orange-700">Firebase Privacy</a></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">RevenueCat</td>
                          <td className="px-4 py-2 border-b">Subscription management</td>
                          <td className="px-4 py-2 border-b"><a href="https://www.revenuecat.com/privacy" className="text-orange-600 hover:text-orange-700">RevenueCat Privacy</a></td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b">Apple</td>
                          <td className="px-4 py-2 border-b">Sign in with Apple, App Store purchases</td>
                          <td className="px-4 py-2 border-b"><a href="https://www.apple.com/privacy/" className="text-orange-600 hover:text-orange-700">Apple Privacy</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>We do not sell, rent, or share your personal data with any other third parties.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">Data Retention and Deletion</h3>
                  <ul className="list-disc pl-6 my-2">
                    <li>Your data is retained as long as you maintain an active account</li>
                    <li>When you delete your account, all your data is immediately and permanently deleted from our servers</li>
                    <li>You can delete your account at any time from the Account settings within the App</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">Children&apos;s Privacy</h3>
                  <p>The App is rated 9+ and is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at Support@snumps.com and we will delete such information.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">Your Rights</h3>
                  <p>You have the right to:</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Access your data through the App</li>
                    <li>Export your data by contacting us</li>
                    <li>Delete your account and all associated data at any time</li>
                    <li>Update your information within the App</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">Changes to This Policy</h3>
                  <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy in the App and updating the &ldquo;Last Updated&rdquo; date.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">Contact Us</h3>
                  <p>If you have questions about this Privacy Policy or your data, please contact us:</p>
                  <p className="mt-2">Snumps LLC<br />Email: Support@snumps.com</p>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Service</h2>
                <p className="text-gray-600 mb-6">Last Updated: December 7, 2025</p>
                <div className="text-gray-600 space-y-4">
                  <p>Welcome to Weight Loss Assist. These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Weight Loss Assist mobile application (&ldquo;App&rdquo;) operated by Snumps LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By using the App, you agree to these Terms.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">1. Acceptance of Terms</h3>
                  <p>By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">2. Eligibility</h3>
                  <p>You must be at least 13 years old to use this App. If you are under 18, you must have permission from a parent or guardian.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">3. Account Registration</h3>
                  <ul className="list-disc pl-6 my-2">
                    <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>You are responsible for all activities that occur under your account</li>
                    <li>You agree to provide accurate and complete information when creating an account</li>
                    <li>You may delete your account at any time through the App settings</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">4. Subscription and Payments</h3>

                  <h4 className="font-semibold text-gray-900 mt-4">4.1 Premium Features</h4>
                  <p>Some features require a paid subscription. Subscription options and pricing are displayed in the App.</p>

                  <h4 className="font-semibold text-gray-900 mt-4">4.2 Billing</h4>
                  <ul className="list-disc pl-6 my-2">
                    <li>Subscriptions are billed through Apple&apos;s App Store</li>
                    <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
                    <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period</li>
                    <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
                  </ul>

                  <h4 className="font-semibold text-gray-900 mt-4">4.3 Cancellation</h4>
                  <ul className="list-disc pl-6 my-2">
                    <li>You may cancel your subscription at any time through your Apple ID account settings</li>
                    <li>Cancellation takes effect at the end of the current billing period</li>
                    <li>No refunds are provided for partial subscription periods</li>
                  </ul>

                  <h4 className="font-semibold text-gray-900 mt-4">4.4 Price Changes</h4>
                  <p>We reserve the right to change subscription prices. Any price changes will apply to subsequent billing periods after notice.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">5. Acceptable Use</h3>
                  <p>You agree NOT to:</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Use the App for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to the App or its systems</li>
                    <li>Interfere with or disrupt the App&apos;s functionality</li>
                    <li>Upload malicious code or content</li>
                    <li>Impersonate any person or entity</li>
                    <li>Use the App to harass, abuse, or harm others</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">6. Health Disclaimer</h3>
                  <p className="font-semibold">IMPORTANT: The App is for informational and tracking purposes only.</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>The App is NOT a substitute for professional medical advice, diagnosis, or treatment</li>
                    <li>Always consult a qualified healthcare provider before starting any weight loss program</li>
                    <li>We do not provide medical advice or recommendations</li>
                    <li>You use any information from the App at your own risk</li>
                    <li>If you have any health concerns, consult a physician before making dietary or exercise changes</li>
                    <li>Stop using the App and seek medical attention if you experience any adverse health effects</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">7. User Content</h3>

                  <h4 className="font-semibold text-gray-900 mt-4">7.1 Your Data</h4>
                  <p>You retain ownership of all data you enter into the App (weight entries, goals, photos, etc.).</p>

                  <h4 className="font-semibold text-gray-900 mt-4">7.2 License to Us</h4>
                  <p>By using the App, you grant us a limited license to store, process, and display your data solely for the purpose of providing the App&apos;s services to you.</p>

                  <h4 className="font-semibold text-gray-900 mt-4">7.3 Responsibility</h4>
                  <p>You are solely responsible for the content you upload, including progress photos.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">8. Intellectual Property</h3>
                  <ul className="list-disc pl-6 my-2">
                    <li>The App, including its design, features, and content, is owned by Snumps LLC</li>
                    <li>You may not copy, modify, distribute, or reverse engineer any part of the App</li>
                    <li>&ldquo;Weight Loss Assist&rdquo; and associated logos are trademarks of Snumps LLC</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">9. Privacy</h3>
                  <p>Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">10. Disclaimers</h3>
                  <p>THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Merchantability or fitness for a particular purpose</li>
                    <li>Accuracy or reliability of any information</li>
                    <li>Uninterrupted or error-free operation</li>
                    <li>Results from using the App</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">11. Limitation of Liability</h3>
                  <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SNUMPS LLC SHALL NOT BE LIABLE FOR:</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                    <li>Any loss of data, profits, or business opportunities</li>
                    <li>Any damages arising from your use or inability to use the App</li>
                  </ul>
                  <p>Our total liability shall not exceed the amount you paid for the App in the 12 months preceding the claim.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">12. Indemnification</h3>
                  <p>You agree to indemnify and hold harmless Snumps LLC from any claims, damages, or expenses arising from:</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Your use of the App</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">13. Termination</h3>
                  <ul className="list-disc pl-6 my-2">
                    <li>We may suspend or terminate your access to the App at any time for violation of these Terms</li>
                    <li>You may stop using the App and delete your account at any time</li>
                    <li>Upon termination, your right to use the App ceases immediately</li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">14. Changes to Terms</h3>
                  <p>We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the new Terms. We will notify you of material changes through the App.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">15. Governing Law</h3>
                  <p>These Terms are governed by the laws of the United States. Any disputes shall be resolved in the courts of competent jurisdiction.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">16. Severability</h3>
                  <p>If any provision of these Terms is found unenforceable, the remaining provisions will continue in effect.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">17. Entire Agreement</h3>
                  <p>These Terms, along with our Privacy Policy, constitute the entire agreement between you and Snumps LLC regarding the App.</p>

                  <h3 className="font-semibold text-gray-900 text-lg mt-6">18. Contact Us</h3>
                  <p>If you have questions about these Terms, please contact us:</p>
                  <p className="mt-2">Snumps LLC<br />Email: Support@snumps.com</p>
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
                <li><a href="/projects/weight-loss-assist" className="text-gray-300 hover:text-white transition-colors duration-200">Weight Loss Assist</a></li>
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
