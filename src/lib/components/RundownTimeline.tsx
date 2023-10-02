/* eslint-disable radix */
/* eslint-disable react/no-array-index-key */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Step,
  StepDescription,
  StepIndicator,
  // StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';
import { MdCheck } from 'react-icons/md';

import type { IEvent } from '../types/event';

const steps = [
  {
    title: 'Venue',
    description:
      '3/F, GRAND BALLROOM,<br> SHERATON HONG KONG HOTEL & TOWERS,<br> 20 NATHAN ROAD,<br> KOWLOON TSIM SHA TSUI,HONG KONG<br><br>香港九龍尖沙咀彌敦道20號<br>香港喜来登酒店 3樓宴會大廳',
  },
  { title: 'Reception', description: '6:00 PM' },
  { title: 'Ceremony & Banquet', description: '7:00 PM' },
];

const RundownTimeline = ({ events }: { events: IEvent[] }) => {
  const displayEvents: IEvent[] = events.filter(
    (event) => event.Description !== undefined && event.Description !== ''
  );
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

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Morning
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stepper index={activeStep} orientation="vertical" gap="0">
            {morningEvents.map((event) => (
              <Step key={event.ID}>
                <StepIndicator>
                  <StepStatus
                    complete={<MdCheck />}
                    incomplete={event.From}
                    active={event.From}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle
                    style={{ whiteSpace: 'pre-line' }}
                    dangerouslySetInnerHTML={{ __html: event.Description }}
                  />
                  <StepDescription>{event.Location}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </AccordionPanel>
      </AccordionItem>
      {/* //afternoonEvents */}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Afternoon
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stepper index={activeStep} orientation="vertical" gap="0">
            {afternoonEvents.map((event) => (
              <Step key={event.ID}>
                <StepIndicator>
                  <StepStatus
                    complete={<MdCheck />}
                    incomplete={event.From}
                    active={event.From}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle
                    style={{ whiteSpace: 'pre-line' }}
                    dangerouslySetInnerHTML={{ __html: event.Description }}
                  />
                  <StepDescription>{event.Location}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </AccordionPanel>
      </AccordionItem>
      {/* //eveningEvents */}
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Evening
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stepper index={activeStep} orientation="vertical" gap="0">
            {eveningEvents.map((event) => (
              <Step key={event.ID}>
                <StepIndicator>
                  <StepStatus
                    complete={<MdCheck />}
                    incomplete={event.From}
                    active={event.From}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle
                    style={{ whiteSpace: 'pre-line' }}
                    dangerouslySetInnerHTML={{ __html: event.Description }}
                  />
                  <StepDescription>{event.Location}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default RundownTimeline;
