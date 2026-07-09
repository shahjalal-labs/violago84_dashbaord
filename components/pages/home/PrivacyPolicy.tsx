'use client';

import { Shield, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/5 mb-4">
            <Shield className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            At <strong>Violago</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. Please read this policy carefully. If you do not agree with the terms of this privacy policy, please do not use our services.
          </p>

          {/* Section: Information We Collect */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1 ml-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact details you provide when creating an account or contacting us.</li>
              <li><strong>Profile Data:</strong> Information about your dog, including name, breed, age, training progress, and health records (optional).</li>
              <li><strong>Usage Data:</strong> Information about how you use our platform, including lesson progress, bookings, and interaction with trainers.</li>
              <li><strong>Device Data:</strong> Device type, operating system, browser type, IP address, and other technical information.</li>
            </ul>
          </div>

          {/* Section: How We Use Your Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1 ml-2">
              <li>Provide, operate, and maintain our platform.</li>
              <li>Personalize your training experience and recommend relevant content.</li>
              <li>Process bookings and manage your training schedule.</li>
              <li>Communicate with you about updates, promotions, and support.</li>
              <li>Monitor and analyze usage trends to improve our services.</li>
              <li>Comply with legal obligations and enforce our terms of service.</li>
            </ul>
          </div>

          {/* Section: How We Share Your Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">3. How We Share Your Information</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We do not sell your personal data. We may share your information in the following cases:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1 ml-2">
              <li><strong>With Trainers:</strong> Your name, dog&apos;s name, and training preferences are shared with trainers you connect with.</li>
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate the platform (e.g., hosting, payment processing, email delivery).</li>
              <li><strong>Legal Compliance:</strong> When required by law or to protect the rights, property, or safety of Violago, our users, or others.</li>
              <li><strong>With Your Consent:</strong> We may share information with your explicit consent.</li>
            </ul>
          </div>

          {/* Section: Data Security */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">4. Data Security</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section: Your Choices and Rights */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Your Choices and Rights</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1 ml-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Update or correct your personal information.</li>
              <li><strong>Deletion:</strong> Request that we delete your account and associated data.</li>
              <li><strong>Opt-out:</strong> Unsubscribe from promotional emails at any time.</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              To exercise these rights, please contact us at <span className="font-medium text-gray-900">violago84@yahoo.com</span>.
            </p>
          </div>

          {/* Section: Children's Privacy */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Children&apos;s Privacy</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our platform is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such data, please contact us immediately.
            </p>
          </div>

          {/* Section: Changes to This Privacy Policy */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">7. Changes to This Privacy Policy</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Section: Contact Us */}
          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">8. Contact Us</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:violago84@yahoo.com"
                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition w-fit"
              >
                <Mail className="w-4 h-4" />
                violago84@yahoo.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} Violago. All rights reserved.
        </p>
      </div>
    </div>
  );
}