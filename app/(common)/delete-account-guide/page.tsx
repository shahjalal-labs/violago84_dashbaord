"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    image: "/account_delete_guide/guide1.png",
    title: "Step 1: Log In",
    description: "Log in to your account using your email and password.",
  },
  {
    image: "/account_delete_guide/guide2.png",
    title: "Step 2: Go to Your Profile",
    description:
      "Tap the profile icon in the top‑right corner of the dashboard.",
  },
  {
    image: "/account_delete_guide/guide3.png",
    title: "Step 3: Click Delete",
    description: "Scroll down and tap the 'Delete' option at the bottom.",
  },
  {
    image: "/account_delete_guide/guide4.png",
    title: "Step 4: Confirm Deletion",
    description:
      "Enter your password and confirm to permanently delete your account.",
  },
];

export default function DeleteAccountGuide() {
  const [currentStep, setCurrentStep] = useState(0);

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };
  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const { image, title, description } = steps[currentStep];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header with gradient */}
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
        How to Delete Your Account
      </h1>

      {/* Subtitle with softer gradient */}
      <p className="text-center text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium mb-8">
        Follow these steps to permanently remove your account and all associated
        data.
      </p>

      {/* Progress bar */}
      <div className="flex items-center gap-1 mb-8 max-w-md mx-auto">
        {steps.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 flex-1 rounded-full transition-colors ${
              idx <= currentStep
                ? "bg-gradient-to-r from-blue-600 to-purple-600"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Image + caption */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative aspect-[9/16] max-h-[600px] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain bg-gray-50"
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>
        <div className="p-6 bg-white">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-700 mt-1 text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={goPrev}
          disabled={currentStep === 0}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition"
        >
          Previous
        </button>
        <span className="text-sm text-gray-500">
          {currentStep + 1} / {steps.length}
        </span>
        <button
          onClick={goNext}
          disabled={currentStep === steps.length - 1}
          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-700 hover:to-purple-700 transition"
        >
          {currentStep === steps.length - 1 ? "Done" : "Next"}
        </button>
      </div>
    </div>
  );
}
