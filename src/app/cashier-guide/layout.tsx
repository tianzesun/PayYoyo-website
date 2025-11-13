import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cashier Guide - Accept PayYoYo Payments',
  description: 'Complete guide for cashiers to accept PayYoYo payments at point of sale. Learn the simple steps to process PayYoYo transactions.',
  keywords: ['PayYoYo cashier guide', 'accept PayYoYo', 'POS guide', 'merchant guide'],
  openGraph: {
    title: 'Cashier Guide - Accept PayYoYo Payments',
    description: 'Complete guide for cashiers to accept PayYoYo payments at point of sale.',
    url: 'https://payyoyo.com/cashier-guide',
    type: 'website'
  }
};

export default function CashierGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
