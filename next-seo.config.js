/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'Wedding-Invitation',
  titleTemplate: '%s | Wedding-Invitation',
  defaultTitle: 'Wedding-Invitation',
  description: 'Next.js + chakra-ui + TypeScript template',
  canonical: 'https://wedding-invitation-orpin.vercel.app/',
  openGraph: {
    url: 'https://wedding-invitation-orpin.vercel.app/',
    title: 'Wedding-Invitation',
    description: 'Next.js + chakra-ui + TypeScript template',
    images: [
      {
        url: 'https://wedding-invitation-orpin.vercel.app/main.svg',
        alt: 'Wedding-Invitation og-image',
      },
    ],
    site_name: 'Wedding-Invitation',
  },
  twitter: {
    handle: '@sozonome',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
