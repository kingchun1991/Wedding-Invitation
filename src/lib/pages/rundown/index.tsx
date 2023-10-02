'use client';

import data from '~/../data/data.json';
import RundownTimeline from '~/lib/components/RundownTimeline';
import type { IEvent } from '~/lib/types/event';

const Rundown = () => {
  const events = data as IEvent[];
  return <RundownTimeline events={events} />;
};

export default Rundown;
