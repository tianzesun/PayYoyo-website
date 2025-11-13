import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | PayYoYo',
  description: 'Get answers to frequently asked questions about PayYoYo\'s AI payment wallet, security, features, and how it works.',
  keywords: ['PayYoYo FAQ', 'payment wallet questions', 'how PayYoYo works', 'payment help'],
  openGraph: {
    title: 'FAQ - Frequently Asked Questions | PayYoYo',
    description: 'Get answers to frequently asked questions about PayYoYo\'s AI payment wallet.',
    url: 'https://payyoyo.com/faq',
    type: 'website'
  }
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
