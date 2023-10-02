/* eslint-disable react/no-array-index-key */
import {
  // Accordion,
  // AccordionButton,
  // AccordionIcon,
  // AccordionItem,
  // AccordionPanel,
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

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
      {displayEvents.map((event) => (
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
            {/* <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion> */}
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default RundownTimeline;
