import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features - PayYoYo AI Payment Wallet',
  description: 'Discover PayYoYo\'s AI-powered features: GPS-triggered payments, automatic card selection, smart recommendations, and secure transactions. Experience the future of payment intelligence.',
  keywords: ['AI payment features', 'GPS payments', 'smart wallet', 'automatic card selection', 'payment automation', 'gift card management'],
  openGraph: {
    title: 'Features - PayYoYo AI Payment Wallet',
    description: 'Discover PayYoYo\'s AI-powered features: GPS-triggered payments, automatic card selection, and smart recommendations.',
    url: 'https://payyoyo.com/features',
    type: 'website'
  }
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
