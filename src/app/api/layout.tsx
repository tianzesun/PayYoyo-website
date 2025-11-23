import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Documentation - PayYoYo Developer Platform',
  description: 'Integrate PayYoYo\'s AI payment platform into your application. Access our RESTful API, webhooks, and SDKs for seamless payment integration.',
  keywords: ['PayYoYo API', 'payment API', 'developer platform', 'payment integration', 'REST API', 'payment SDK'],
  openGraph: {
    title: 'API Documentation - PayYoYo Developer Platform',
    description: 'Integrate PayYoYo\'s AI payment platform with our RESTful API, webhooks, and SDKs.',
    url: 'https://payyoyo.com/api',
    type: 'website'
  }
};

export default function ApiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
