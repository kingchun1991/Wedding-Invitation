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
// import { MdCheck } from 'react-icons/md';

import type { IEvent } from '../types/event';

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
    count: displayEvents.length,
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
          <Stepper size="lg" index={activeStep} orientation="vertical" gap="0">
            {morningEvents.map((event) => (
              <Step key={event.ID}>
                <StepIndicator>
                  <StepStatus
                    complete={event.From}
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
          <Stepper size="lg" index={activeStep} orientation="vertical" gap="0">
            {afternoonEvents.map((event) => (
              <Step key={event.ID}>
                <StepIndicator>
                  <StepStatus
                    complete={event.From}
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
          <Stepper size="lg" index={activeStep} orientation="vertical" gap="0">
            {eveningEvents.map((event) => (
              <Step key={event.ID}>
                <StepIndicator>
                  <StepStatus
                    complete={event.From}
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
