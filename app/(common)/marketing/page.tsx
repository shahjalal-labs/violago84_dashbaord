import MarketingPage from "@/components/pages/home/MarketingPage";

export const metadata = {
  title: "Violago – Train Smarter, Build Stronger Bonds",
  description:
    "The all‑in‑one dog training platform that connects you with expert trainers and gives you the tools to track your dog’s progress.",
  keywords:
    "dog training, puppy training, dog trainers, pet care, dog behavior",
  openGraph: {
    title: "Violago – Train Smarter, Build Stronger Bonds",
    description:
      "The all‑in‑one dog training platform that connects you with expert trainers and gives you the tools to track your dog’s progress.",
    url: "https://violago.com",
    siteName: "Violago",
    images: [
      {
        url: "https://violago.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Violago – Train Smarter, Build Stronger Bonds",
    description:
      "The all‑in‑one dog training platform that connects you with expert trainers and gives you the tools to track your dog’s progress.",
    images: ["https://violago.com/og-image.jpg"],
  },
};

export default function HomePage() {
  return <MarketingPage />;
}

