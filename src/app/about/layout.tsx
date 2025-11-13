import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - PayYoYo Team & Mission',
  description: 'Meet the PayYoYo team building the future of AI-powered payments. Learn about our mission to eliminate gift card waste and revolutionize how people pay.',
  keywords: ['PayYoYo team', 'about PayYoYo', 'payment innovation', 'AI payment company', 'fintech startup'],
  openGraph: {
    title: 'About Us - PayYoYo Team & Mission',
    description: 'Meet the PayYoYo team building the future of AI-powered payments.',
    url: 'https://payyoyo.com/about',
    type: 'website'
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
