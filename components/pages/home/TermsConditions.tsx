'use client';

import { FileText, Mail } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/5 mb-4">
            <FileText className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms and Conditions</h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
          <p className="text-gray-600 text-sm leading-relaxed">
            Welcome to <strong>Violago</strong>. By using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully. If you do not agree with these terms, please do not use our services.
          </p>

          {/* Section: Acceptance of Terms */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              By creating an account or using Violago, you agree to these Terms and Conditions, our Privacy Policy, and any additional guidelines or rules we may post. We reserve the right to update these terms at any time, and your continued use constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* Section: User Accounts */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">2. User Accounts</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li>You must be at least 13 years old to create an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree to provide accurate and complete information when registering.</li>
              <li>You are solely responsible for all activities that occur under your account.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
            </ul>
          </div>

          {/* Section: Platform Services */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">3. Platform Services</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Violago provides a platform for dog owners to connect with trainers, access training content, and track progress. The services include:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li>Access to training lessons and programs.</li>
              <li>Progress tracking and milestone management.</li>
              <li>Booking sessions with trainers.</li>
              <li>Direct communication with trainers.</li>
              <li>Health and vet record management.</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              We reserve the right to modify, suspend, or discontinue any part of the platform at any time without notice.
            </p>
          </div>

          {/* Section: User Content */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">4. User Content</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              You may upload content such as profile pictures, dog information, and progress notes. You retain ownership of your content, but by uploading, you grant Violago a worldwide, royalty-free, non-exclusive license to use, display, and distribute your content as necessary to operate the platform.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-2">
              You agree not to upload content that is illegal, defamatory, offensive, or infringes on the rights of others. We reserve the right to remove any content that violates these terms.
            </p>
          </div>

          {/* Section: Bookings and Payments */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">5. Bookings and Payments</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li>Trainers set their own session fees, and prices are clearly displayed before booking.</li>
              <li>Payments are processed through third-party payment providers (e.g., Stripe). We do not store your payment details.</li>
              <li>You may cancel or reschedule bookings according to the trainer&apos;s cancellation policy.</li>
              <li>Refunds are issued at the discretion of the trainer and in accordance with their policy.</li>
              <li>Violago is not responsible for disputes between users and trainers but may provide mediation support.</li>
            </ul>
          </div>

          {/* Section: Intellectual Property */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">6. Intellectual Property</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              All content on Violago, including text, graphics, logos, icons, images, and software, is the property of Violago or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>
          </div>

          {/* Section: Prohibited Conduct */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">7. Prohibited Conduct</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
              <li>Use the platform for any illegal or unauthorized purpose.</li>
              <li>Harass, abuse, or harm other users or trainers.</li>
              <li>Impersonate any person or entity.</li>
              <li>Upload viruses or malicious code.</li>
              <li>Attempt to gain unauthorized access to any part of the platform.</li>
              <li>Interfere with the normal operation of the platform.</li>
            </ul>
          </div>

          {/* Section: Disclaimer of Warranties */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">8. Disclaimer of Warranties</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Violago is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that the platform will be uninterrupted, error-free, or secure. Your use of the platform is at your own risk.
            </p>
          </div>

          {/* Section: Limitation of Liability */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">9. Limitation of Liability</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              To the fullest extent permitted by law, Violago and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the platform. Our total liability shall not exceed the amount you paid us in the past 12 months.
            </p>
          </div>

          {/* Section: Termination */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">10. Termination</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We may terminate or suspend your account at any time, with or without cause, with or without notice. Upon termination, your right to use the platform will cease immediately. You may also delete your account at any time through your account settings.
            </p>
          </div>

          {/* Section: Governing Law */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">11. Governing Law</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Violago operates, without regard to its conflict of law provisions.
            </p>
          </div>

          {/* Section: Contact Us */}
          <div className="border-t border-gray-100 pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">12. Contact Us</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at:
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