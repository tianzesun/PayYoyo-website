import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - Join the PayYoYo Team',
  description: 'Join PayYoYo and help build the future of AI-powered payments. Explore open positions in engineering, product, design, and more.',
  keywords: ['PayYoYo careers', 'fintech jobs', 'AI payment jobs', 'startup careers', 'engineering jobs'],
  openGraph: {
    title: 'Careers - Join the PayYoYo Team',
    description: 'Join PayYoYo and help build the future of AI-powered payments.',
    url: 'https://payyoyo.com/careers',
    type: 'website'
  }
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
