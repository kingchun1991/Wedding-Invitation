import type { Metadata } from 'next';

import Providers from '~/app/providers';
import Layout from '~/lib/layout';

type RootLayoutProps = {
  children: React.ReactNode;
};

const APP_NAME = 'Waiwai & Frank Wedding Invitation';

const description = 'Save the date: 11 Nov 2023';

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: '%s | Waiwai & Frank Wedding Invitation',
  },
  description: `${description}`,
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFFFFF',
  openGraph: {
    url: 'https://wedding-invitation-orpin.vercel.app/',
    title: 'Waiwai & Frank Wedding Invitation',
    description: `${description}`,
    images: {
      url: 'https://wedding-invitation-orpin.vercel.app/main.png',
      alt: 'Waiwai & Frank Wedding og-image',
      type: 'png',
    },
  },
  twitter: {
    creator: '@frank',
    card: 'summary_large_image',
    description: `${description}`,
    images: {
      url: 'https://wedding-invitation-orpin.vercel.app/main.png',
      type: ' png',
    },
  },
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
