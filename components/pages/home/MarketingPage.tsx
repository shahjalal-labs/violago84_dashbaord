'use client';

import { 
  ArrowRight, 
  Search, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  MessageSquare, 
  CheckCircle,
  ChevronRight,
} from 'lucide-react';

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-sm">
              V
            </div>
            <span className="text-xl font-bold text-gray-900">Violago</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features">Features</a>
            <a href="#mission">Mission</a>
            <a href="#support">Support</a>
          </nav>
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition flex items-center gap-1">
            Download App
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-black/5 rounded-full px-4 py-1.5 text-xs font-medium text-gray-700 mb-6">
            🐾 Smart Training, Happy Dogs
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Train Smarter,<br />
            <span className="text-gray-500">Build Stronger Bonds</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Violago is a modern platform that connects dog owners with expert trainers and provides personalized training plans, progress tracking, and direct support — all in one place.
          </p>
          <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto">
            Discover training programs, explore lessons, track your dog&apos;s progress, and manage your training journey seamlessly.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-2">
              Get Started
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section id="features" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Search, label: 'Search training programs and trainers easily.' },
              { icon: Calendar, label: 'Explore services, book and manage appointments.' },
              { icon: Clock, label: 'Track progress and milestone achievements.' },
              { icon: MapPin, label: 'Discover nearby trainers and facilities.' },
              { icon: Users, label: 'Connect with expert trainers for personalized guidance.' },
              { icon: MessageSquare, label: 'Direct messaging with your trainer for support.' },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition">
                <feature.icon className="w-5 h-5 text-gray-700 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section id="mission" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission is to simplify the dog training experience for dog owners while helping trainers grow their practice through modern technology and meaningful connections.
          </p>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Support</h2>
          <p className="text-gray-600 mb-6">
            Have questions or need help? Reach out to us anytime.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:violago84@yahoo.com"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              <span className="text-sm font-medium">violago84@yahoo.com</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">We reply within 24 hours</p>
        </div>
      </section>

      {/* CTA – Download App */}
      {/* <section className="py-12 bg-black text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold">Ready to start?</h3>
          <p className="mt-2 text-gray-300">Download the Violago app and begin your training journey today.</p>
          <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
            Download Now
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Violago. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}