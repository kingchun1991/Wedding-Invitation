/* eslint-disable @next/next/no-async-client-component */

'use client';

import RundownTimeline from '~/lib/components/RundownTimeline';
import type { IEvent } from '~/lib/types/event';

async function getData() {
  const dataModule = await import('~/../data/data.json');
  // const companyDataModule = await import('~/../data/companyInfo.json');
  const jobs: IEvent[] = dataModule.default;
  // const companys: ICompanyInfo[] = companyDataModule.default;
  return jobs;
}

const Rundown = async () => {
  const events = (await getData()) as IEvent[];
  return <RundownTimeline events={events} />;
};

export default Rundown;
