"use client"
import React from 'react';
import { Mail, Phone, MapPin, Shield, Lock, Eye, Trash2 } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section 
        className="py-12 text-white"
        style={{ background: 'linear-gradient(135deg, #004bab 0%, #0056cc 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start space-x-4">
            <Shield size={40} className="flex-shrink-0" />
            <div>
              <h1 className="text-5xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-xl text-blue-100">Your data security and privacy are our top priority</p>
              <p className="text-blue-200 mt-2">Last updated: May 31, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <a href="#section-1" className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-blue-600 hover:border-blue-600 transition-colors text-sm font-semibold">
              Information Collection
            </a>
            <a href="#section-2" className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-blue-600 hover:border-blue-600 transition-colors text-sm font-semibold">
              How We Process
            </a>
            <a href="#section-3" className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-blue-600 hover:border-blue-600 transition-colors text-sm font-semibold">
              Data Sharing
            </a>
            <a href="#section-4" className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-blue-600 hover:border-blue-600 transition-colors text-sm font-semibold">
              Your Rights
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          {/* Section 1 */}
          <div id="section-1" className="scroll-mt-20">
            <div className="flex items-start space-x-4 mb-4">
              <Eye size={28} style={{ color: '#004bab' }} className="flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What Personal Information Do We Collect?</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  We collect personal information that you voluntarily provide to us when you register as a partner, express interest in partnership opportunities, or contact us through various channels on our platform.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3">Information You Provide Directly</h3>
                <div className="space-y-3 mb-6">
                  <div className="bg-slate-50 p-4 rounded-lg border-l-4" style={{ borderLeftColor: '#004bab' }}>
                    <p className="font-semibold text-slate-900">Contact Information</p>
                    <p className="text-slate-600 text-sm mt-1">Full name, email address, phone number, and business name</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border-l-4" style={{ borderLeftColor: '#004bab' }}>
                    <p className="font-semibold text-slate-900">Business Information</p>
                    <p className="text-slate-600 text-sm mt-1">Company details, job title, industry, and business objectives</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border-l-4" style={{ borderLeftColor: '#004bab' }}>
                    <p className="font-semibold text-slate-900">Account Credentials</p>
                    <p className="text-slate-600 text-sm mt-1">Authentication data, passwords, and security questions</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border-l-4" style={{ borderLeftColor: '#004bab' }}>
                    <p className="font-semibold text-slate-900">Communication Preferences</p>
                    <p className="text-slate-600 text-sm mt-1">How you prefer to be contacted and topics of interest</p>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3">Information We Collect Automatically</h3>
                <p className="text-slate-700 leading-relaxed">
                  When you visit our partner portal or interact with our services, we automatically collect technical information including:
                </p>
                <ul className="space-y-2 ml-6 mt-3">
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>Device characteristics and operating system information</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>IP address and geolocation data</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>Browser type and version, referring URLs</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>How and when you use our services</span>
                  </li>
                  <li className="text-slate-700 flex items-start">
                    <span className="text-blue-600 mr-3 font-bold">•</span>
                    <span>Cookies and similar tracking technologies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div id="section-2" className="scroll-mt-20 pt-8 border-t border-slate-200">
            <div className="flex items-start space-x-4 mb-4">
              <Lock size={28} style={{ color: '#004bab' }} className="flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">How Do We Process Your Information?</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  We process your personal information only when we have a valid legal reason to do so. Our primary purposes include:
                </p>
                
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-slate-900 mb-2">Service Delivery</p>
                    <p className="text-slate-700 text-sm">Providing, maintaining, and improving our partner services and portal</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-slate-900 mb-2">Communication</p>
                    <p className="text-slate-700 text-sm">Communicating with you about partnership opportunities, updates, and changes</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-slate-900 mb-2">Security & Fraud Prevention</p>
                    <p className="text-slate-700 text-sm">Protecting your account and detecting unauthorized access or suspicious activities</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-slate-900 mb-2">Analytics & Improvement</p>
                    <p className="text-slate-700 text-sm">Understanding platform usage and optimizing user experience</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg border border-blue-200">
                    <p className="font-semibold text-slate-900 mb-2">Legal Compliance</p>
                    <p className="text-slate-700 text-sm">Meeting applicable legal and regulatory requirements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div id="section-3" className="scroll-mt-20 pt-8 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">When and With Whom Do We Share Your Information?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We do not sell your personal information. However, we may share it in specific situations:
            </p>
            <div className="space-y-3">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-slate-900">With Service Providers</p>
                <p className="text-slate-700 text-sm mt-1">Third-party vendors who help us deliver services (e.g., cloud hosting, email services)</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-slate-900">Google Services</p>
                <p className="text-slate-700 text-sm mt-1">Limited data sharing with Google Maps and Google Analytics for functionality and analytics</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-slate-900">Legal Requirements</p>
                <p className="text-slate-700 text-sm mt-1">When required by law, court order, or government request</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <p className="font-semibold text-slate-900">Business Transfers</p>
                <p className="text-slate-700 text-sm mt-1">In case of merger, acquisition, or sale of assets</p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div id="section-4" className="scroll-mt-20 pt-8 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Data Retention</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When we no longer have a legitimate business need to process your information, we will delete or anonymize it. In cases where deletion is not immediately possible (such as backup archives), we will securely store and isolate your information from further processing.
            </p>
          </div>

          {/* Section 5 */}
          <div className="scroll-mt-20 pt-8 border-t border-slate-200">
            <div className="flex items-start space-x-4 mb-4">
              <Trash2 size={28} style={{ color: '#004bab' }} className="flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What Are Your Privacy Rights?</h2>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Depending on your geographic location, you may have certain rights regarding your personal information. These may include:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-slate-900 mb-2">Right to Access</p>
                    <p className="text-slate-700 text-sm">Request and receive a copy of your personal information</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-slate-900 mb-2">Right to Correct</p>
                    <p className="text-slate-700 text-sm">Correct inaccurate or incomplete information</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-slate-900 mb-2">Right to Delete</p>
                    <p className="text-slate-700 text-sm">Request deletion of your personal information</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-slate-900 mb-2">Right to Withdraw Consent</p>
                    <p className="text-slate-700 text-sm">Withdraw consent at any time without affecting prior processing</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-slate-900 mb-2">Right to Object</p>
                    <p className="text-slate-700 text-sm">Object to processing of your data for specific purposes</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-semibold text-slate-900 mb-2">Right to Portability</p>
                    <p className="text-slate-700 text-sm">Request your data in a structured, portable format</p>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed mt-6">
                  To exercise any of these rights, please submit a data subject access request by contacting us at <a href="mailto:connect@basiq360.com" className="text-blue-600 font-semibold hover:underline">connect@basiq360.com</a>. We will respond to your request within 30 days in accordance with applicable data protection laws.
                </p>
              </div>
            </div>
          </div>

          {/* Children Policy */}
          <div className="scroll-mt-20 pt-8 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Do We Collect Information From Minors?</h2>
            <p className="text-slate-700 leading-relaxed">
              We do not knowingly collect personal information from individuals under 18 years of age. By using our services, you represent that you are at least 18 years old. If we discover that we have collected information from someone under 18, we will immediately delete such information and notify the individual. If you believe we have collected data from a minor, please contact us immediately at <a href="mailto:connect@basiq360.com" className="text-blue-600 font-semibold hover:underline">connect@basiq360.com</a>.
            </p>
          </div>

          {/* Updates */}
          <div className="scroll-mt-20 pt-8 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Updates to This Privacy Notice</h2>
            <p className="text-slate-700 leading-relaxed">
              We may update this privacy notice from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by prominently posting the updated notice on our website or by sending you a direct notification. The "Last updated" date at the top of this page indicates when this policy was last revised. We encourage you to review this policy regularly to stay informed about how we protect your information.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Questions About Your Privacy?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We're committed to being transparent about our data practices. If you have any questions, concerns, or would like to exercise your privacy rights, please don't hesitate to contact us.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="mailto:connect@basiq360.com" className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-600 hover:shadow-md transition-all">
                <Mail size={28} style={{ color: '#004bab' }} className="flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-blue-600 text-sm hover:underline">connect@basiq360.com</p>
                </div>
              </a>
              
              <a href="tel:+919350059390" className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-600 hover:shadow-md transition-all">
                <Phone size={28} style={{ color: '#004bab' }} className="flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Phone (India)</p>
                  <p className="text-blue-600 text-sm hover:underline">+91 935 005 9390</p>
                </div>
              </a>
              
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-blue-200">
                <MapPin size={28} style={{ color: '#004bab' }} className="flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="text-slate-600 text-sm">Faridabad, Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}