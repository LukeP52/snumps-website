'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BlackjackGamePage() {
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
      <section className="pt-24 pb-12 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blackjack Game
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Classic casino card game with modern design and smooth gameplay experience.
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
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors duration-200 ${
                activeTab === 'terms'
                  ? 'text-blue-600 border-blue-600'
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
                  <h3 className="font-semibold text-gray-900">Privacy Policy</h3>
                  <p>This privacy policy applies to the Blackjack - No Ads app (hereby referred to as &ldquo;Application&rdquo;) for mobile devices that was created by Snumps LLC (hereby referred to as &ldquo;Service Provider&rdquo;) as a Freemium service. This service is intended for use &ldquo;AS IS&rdquo;.</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Information Collection and Use</h4>
                  <p>The Application collects information when you download and use it. This information may include information such as</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>Your device&apos;s Internet Protocol address (e.g. IP address)</li>
                    <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                    <li>The time spent on the Application</li>
                    <li>The operating system you use on your mobile device</li>
                  </ul>
                  
                  <p>The Application does not gather precise information about the location of your mobile device.</p>
                  
                  <p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>
                  
                  <p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Third Party Access</h4>
                  <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>
                  
                  <p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>RevenueCat</li>
                  </ul>
                  
                  <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
                  <ul className="list-disc pl-6 my-2">
                    <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                    <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                    <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                  </ul>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Opt-Out Rights</h4>
                  <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Data Retention Policy</h4>
                  <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you&apos;d like them to delete User Provided Data that you have provided via the Application, please contact them at Support@snumps.com and they will respond in a reasonable time.</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Children</h4>
                  <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>
                  
                  <p>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (Support@snumps.com) so that they will be able to take the necessary actions.</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Security</h4>
                  <p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Changes</h4>
                  <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
                  
                  <p>This privacy policy is effective as of 2025-10-29</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Your Consent</h4>
                  <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Contact Us</h4>
                  <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at Support@snumps.com.</p>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms and Conditions</h2>
                <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                <div className="text-gray-600 space-y-4">
                  <h3 className="font-semibold text-gray-900">Terms & Conditions</h3>
                  <p>These terms and conditions apply to the Blackjack - No Ads app (hereby referred to as &ldquo;Application&rdquo;) for mobile devices that was created by Snumps LLC (hereby referred to as &ldquo;Service Provider&rdquo;) as a Freemium service.</p>
                  
                  <p>Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.</p>
                  
                  <p>The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.</p>
                  
                  <p>The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone&apos;s security features, and may result in the Application not functioning correctly or at all.</p>
                  
                  <p>Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Application:</p>
                  <ul className="list-disc pl-6">
                    <li>RevenueCat</li>
                  </ul>
                  
                  <p>Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.</p>
                  
                  <p>If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider&apos;s agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.</p>
                  
                  <p>Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.</p>
                  
                  <p>In terms of the Service Provider&apos;s responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.</p>
                  
                  <p>The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Changes to These Terms and Conditions</h4>
                  <p>The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.</p>
                  
                  <p>These terms and conditions are effective as of 2025-10-29</p>
                  
                  <h4 className="font-semibold text-gray-900 mt-6">Contact Us</h4>
                  <p>If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at Support@snumps.com.</p>
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