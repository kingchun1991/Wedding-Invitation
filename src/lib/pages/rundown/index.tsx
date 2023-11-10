/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable no-restricted-syntax */
/* eslint-disable radix */

'use client';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

import data from '~/../data/data.json';
// import AvatarTag from '~/lib/components/AvatarTag';
import RundownTimeline from '~/lib/components/RundownTimeline';
import type { IEvent, IConvertedEvent } from '~/lib/types/event';

const Rundown = () => {
  const events = data as IEvent[];

  const displayEvents: IEvent[] = events.filter(
    (event) => event.Description !== undefined && event.Description !== ''
  );
  const convertedData: IConvertedEvent[] = displayEvents
    .map((event, index) => {
      const [startHour, startMinute] = event.From.split(':');
      const startTime = `${startHour.padStart(2, '0')}:${startMinute}`;

      let endTime = '';
      if (index < displayEvents.length - 1) {
        const [endHour, endMinute] = displayEvents[index + 1].From.split(':');
        endTime = `${endHour.padStart(2, '0')}:${endMinute}`;
      } else {
        const [endHour, endMinute] = event.To.split(':');
        endTime = `${endHour.padStart(2, '0')}:${endMinute}`;
      }

      let description = '';

      Object.entries(event).forEach(([key, value]) => {
        if (
          value &&
          key !== 'ID' &&
          key !== 'From' &&
          key !== 'To' &&
          key !== 'Location' &&
          key !== 'Description'
        ) {
          description += `${key}: ${value}<br>`;
        }
      });

      const convertedEvent: IConvertedEvent = {
        name: event.Description,
        description,
        startDate: '2023-11-11',
        location: event.Location,
        startTime,
        endTime,
      };

      return convertedEvent;
    })
    .filter(Boolean); // Remove null values

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

  const categories = [
    { name: 'Time Keeper', pic: ['Vicx', 'Ray'] },
    { name: 'Game', pic: ['Joanna', 'Kristy', 'Vivien', 'Vicx'] },
    { name: '金器+敬茶', pic: ['Yvonne', 'Raj', 'Nicole', 'Joanna'] },
    { name: '利是', pic: ['Ray'] },
    { name: 'Reception', pic: ['Joanna', 'Tony', 'Tommy'] },
    { name: 'Contact', pic: ['Chris'] },
    { name: '戒指', pic: ['Ivan'] },
    { name: '影片音樂', pic: ['Kenneth'] },
    { name: '影相', pic: ['Julius', 'Yvonne'] },
    { name: '物資', pic: ['Vicx'] },
  ];

  const contactList = [
    { name: 'Idy Yau', title: '化妝師 (新娘) ', phone: '98091979' },
    { name: 'Alvin Li', title: 'MC', phone: '93897936' },
    {
      name: 'Sum',
      title: '攝影師 (三木攝影) ',
      phone: '60119078',
    },
    {
      name: 'TBC',
      title: '花車司機 (Sheraton)',
      phone: 'TBC',
    },
    {
      name: 'TBC',
      title: '28座司機 (Wedding Box HK) ',
      phone: 'TBC',
    },
    {
      name: 'Charlotte Lee',
      title: '酒店 (Sheraton) ',
      phone: '95752375',
    },
    {
      name: 'Lawrence Lam',
      title: 'Deco - Main backdrop (Mygift Event & Decoration) ',
      phone: '63386568',
    },
    {
      name: '顏俊逸 Joe',
      title: '律師 (Merry Marry) ',
      phone: '69292433',
    },
  ];

  return (
    <>
      <Text fontSize="2xl" as="b">
        Rundown
      </Text>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                PIC
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <TableContainer>
              <Table variant="simple" size="sm">
                <Thead>
                  <Tr>
                    <Th />
                    <Th>People</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {categories.map((category, index) => (
                    <Tr key={index}>
                      <Td>{category.name}</Td>
                      <Td>
                        {category.pic.map((name, index) => (
                          <Text key={index}>{name}</Text>
                        ))}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </AccordionPanel>
        </AccordionItem>
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
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Contact
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Table variant="simple" size="sm">
              <Tbody>
                {contactList.map((contact, index) => (
                  <Tr key={index}>
                    <Td>
                      <Flex mb={1}>
                        <HStack>
                          <Text fontSize="xs">{contact.title}</Text>
                        </HStack>
                      </Flex>
                      <Flex mb={1}>
                        <Text fontSize="lg" as="b">
                          {contact.name}
                        </Text>
                      </Flex>
                    </Td>
                    <Td>
                      <Text as="b">{contact.phone}</Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <AddToCalendarButton
        name="Event Series"
        dates={convertedData}
        timeZone="Asia/Hong_Kong"
        options="'Apple','Google'"
        lightMode="system"
      />
    </>
  );
};

export default Rundown;
