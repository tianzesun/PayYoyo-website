import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security - Bank-Level Protection | PayYoYo',
  description: 'PayYoYo uses bank-level security with PCI DSS Level 1 compliance, end-to-end encryption, and biometric authentication to protect your payment data.',
  keywords: ['payment security', 'PCI DSS compliance', 'secure wallet', 'encrypted payments', 'biometric security'],
  openGraph: {
    title: 'Security - Bank-Level Protection | PayYoYo',
    description: 'PayYoYo uses bank-level security with PCI DSS Level 1 compliance and end-to-end encryption.',
    url: 'https://payyoyo.com/security',
    type: 'website'
  }
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
