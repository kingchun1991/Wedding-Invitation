/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-restricted-syntax */
/* eslint-disable radix */

'use client';

import { Accordion, Text } from '@chakra-ui/react';

import data from '~/../data/data.json';
import RundownTimeline from '~/lib/components/RundownTimeline';
import type { IEvent } from '~/lib/types/event';

const Rundown = () => {
  const events = data as IEvent[];

  const displayEvents: IEvent[] = events.filter(
    (event) => event.Description !== undefined && event.Description !== ''
  );

  const getCurrentEventID = (): string | undefined => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    let closestTimeDiff = Infinity;
    let closestEventID: string | undefined;

    for (const event of displayEvents) {
      const eventTime =
        parseInt(event.From.split(':')[0]) * 60 +
        parseInt(event.From.split(':')[1]);
      const timeDiff = Math.abs(currentTime - eventTime);

      if (timeDiff < closestTimeDiff) {
        closestTimeDiff = timeDiff;
        closestEventID = event.ID;
      }
    }

    return closestEventID;
  };

  const morningEvents: IEvent[] = displayEvents.filter((event) => {
    const fromTime = parseInt(event.From.split(':')[0]);
    return fromTime >= 4 && fromTime < 12;
  });

  const afternoonEvents: IEvent[] = displayEvents.filter((event) => {
    const fromTime = parseInt(event.From.split(':')[0]);
    return fromTime >= 12 && fromTime < 18;
  });

  const eveningEvents: IEvent[] = displayEvents.filter((event) => {
    const fromTime = parseInt(event.From.split(':')[0]);
    return fromTime >= 18 && fromTime <= 23;
  });
  const currentEventID = getCurrentEventID();
  let morningIndex = -1;
  let afternoonIndex = -1;
  let eveningIndex = -1;

  if (currentEventID) {
    const maxMorningID = morningEvents.reduce(
      (maxID, event) => Math.max(maxID, parseInt(event.ID)),
      0
    );
    const minMorningID = morningEvents.reduce(
      (minID, event) => Math.min(minID, parseInt(event.ID)),
      Infinity
    );
    const maxAfternoonID = afternoonEvents.reduce(
      (maxID, event) => Math.max(maxID, parseInt(event.ID)),
      0
    );
    const minAfternoonID = afternoonEvents.reduce(
      (minID, event) => Math.min(minID, parseInt(event.ID)),
      Infinity
    );
    const maxEveningID = eveningEvents.reduce(
      (maxID, event) => Math.max(maxID, parseInt(event.ID)),
      0
    );
    const minEveningID = eveningEvents.reduce(
      (minID, event) => Math.min(minID, parseInt(event.ID)),
      Infinity
    );

    morningIndex = morningEvents.findIndex(
      (event) => event.ID === currentEventID
    );
    afternoonIndex = afternoonEvents.findIndex(
      (event) => event.ID === currentEventID
    );
    eveningIndex = eveningEvents.findIndex(
      (event) => event.ID === currentEventID
    );

    if (morningIndex === -1) {
      if (parseInt(currentEventID) > maxMorningID) {
        morningIndex = morningEvents.length;
      } else if (parseInt(currentEventID) < minMorningID) {
        morningIndex = 0;
      }
    }

    if (afternoonIndex === -1) {
      if (parseInt(currentEventID) > maxAfternoonID) {
        afternoonIndex = afternoonEvents.length;
      } else if (parseInt(currentEventID) < minAfternoonID) {
        afternoonIndex = 0;
      }
    }

    if (eveningIndex === -1) {
      if (parseInt(currentEventID) > maxEveningID) {
        eveningIndex = eveningEvents.length;
      } else if (parseInt(currentEventID) < minEveningID) {
        eveningIndex = 0;
      }
    }
  }

  return (
    <>
      <Text fontSize="2xl" as="b">
        Rundown
      </Text>
      <Accordion allowToggle>
        <RundownTimeline
          title="Morning"
          index={morningIndex}
          events={morningEvents}
        />
        <RundownTimeline
          title="Afternoon"
          index={afternoonIndex}
          events={afternoonEvents}
        />
        <RundownTimeline
          title="Evening"
          index={eveningIndex}
          events={eveningEvents}
        />
      </Accordion>
    </>
  );
};

export default Rundown;
