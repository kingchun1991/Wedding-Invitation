import type { Metadata } from 'next';

import Rundown from '~/lib/pages/rundown';

export const metadata: Metadata = {
  title: 'Rundown',
  description: 'Rundown on 11 Nov 2023',
};

export default async function index() {
  return <Rundown />;
}
