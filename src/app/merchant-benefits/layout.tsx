import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merchant Benefits - Increase Gift Card Redemption | PayYoYo',
  description: 'Increase gift card redemption rates and customer satisfaction with PayYoYo. Learn how merchants benefit from accepting PayYoYo payments.',
  keywords: ['merchant benefits', 'gift card redemption', 'merchant analytics', 'customer satisfaction', 'PayYoYo merchants'],
  openGraph: {
    title: 'Merchant Benefits - Increase Gift Card Redemption | PayYoYo',
    description: 'Increase gift card redemption rates and customer satisfaction with PayYoYo.',
    url: 'https://payyoyo.com/merchant-benefits',
    type: 'website'
  }
};

export default function MerchantBenefitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
