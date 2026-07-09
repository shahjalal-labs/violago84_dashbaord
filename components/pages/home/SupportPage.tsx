'use client';

import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  HelpCircle, 
  BookOpen, 
  User, 
  Settings, 
  AlertTriangle, 
  Star, 
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

// FAQ data
const faqs = [
  {
    question: 'How do I book a training session?',
    answer: 'You can book a session through the "My Journey" section. Select a lesson, choose a date, and confirm your booking.',
  },
  {
    question: 'How can I reset my password?',
    answer: 'Go to the login screen, tap "Forgot password", and follow the instructions sent to your email.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept credit/debit cards, Apple Pay, and Google Pay. All transactions are secure and encrypted.',
  },
  {
    question: 'Can I cancel or reschedule a session?',
    answer: 'Yes, you can cancel or reschedule up to 24 hours before the session via the "My Bookings" section.',
  },
  {
    question: 'How do I contact a trainer directly?',
    answer: 'After booking, you\'ll have access to the trainer\'s profile with a direct messaging option.',
  },
];

const supportTopics = [
  { icon: BookOpen, label: 'Booking & Appointments' },
  { icon: User, label: 'Account Access' },
  { icon: Settings, label: 'Technical Issues' },
  { icon: AlertTriangle, label: 'Report a Problem' },
  { icon: Star, label: 'Suggestions & Feedback' },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black/5 mb-4">
            <HelpCircle className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Support Center</h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            We are here to help you with any questions or issues you may have. 
            Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Channels - Two columns (Email + Phone) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          <a
            href="mailto:violago84@yahoo.com"
            className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center border border-gray-100 hover:border-black/20"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-black/5 group-hover:bg-black/10 transition mb-4">
              <Mail className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="font-semibold text-gray-900">Email Support</h3>
            <p className="text-sm text-gray-500 mt-1">violago84@yahoo.com</p>
            <p className="text-xs text-gray-400 mt-1">We reply within 24 hours</p>
          </a>

          <a
            href="tel:+1234567890"
            className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center border border-gray-100 hover:border-blue-200"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-50 group-hover:bg-blue-100 transition mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Phone Support</h3>
            <p className="text-sm text-gray-500 mt-1">+1 (234) 567-890</p>
            <p className="text-xs text-gray-400 mt-1">Mon–Sat, 9 AM – 9 PM EST</p>
          </a>
        </div>

        {/* Quick Help Topics */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Common Support Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportTopics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-black/20 transition"
              >
                <topic.icon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-800">{topic.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="text-sm font-medium text-gray-800 pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            ))}
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