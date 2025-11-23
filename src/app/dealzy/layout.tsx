import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dealzy Checkout - Smart Grocery Shopping | PayYoYo',
  description: 'Experience smart grocery shopping with Dealzy Checkout powered by PayYoYo. Automatic payment optimization and rewards integration.',
  keywords: ['Dealzy', 'smart checkout', 'grocery shopping', 'payment optimization', 'PayYoYo checkout'],
  openGraph: {
    title: 'Dealzy Checkout - Smart Grocery Shopping | PayYoYo',
    description: 'Experience smart grocery shopping with Dealzy Checkout powered by PayYoYo.',
    url: 'https://payyoyo.com/dealzy',
    type: 'website'
  }
};

export default function DealzyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
