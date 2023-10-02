/* eslint-disable no-restricted-syntax */
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Stack,
  Step,
  StepDescription,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

import type { IEvent } from '../types/event';

function renderBadges(data: IEvent) {
  const badges = [];

  if (!data) {
    // Render a message or component for no data
    return <p>No data available</p>; // Replace with your desired component
  }

  if (data.新郎 !== '') {
    badges.push(<Badge colorScheme="blue">新郎</Badge>);
  }

  if (data.新娘 !== '') {
    badges.push(<Badge colorScheme="red">新娘</Badge>);
  }

  if (data.姊妹 !== '') {
    badges.push(<Badge colorScheme="pink">姊妹</Badge>);
  }

  if (data.兄弟 !== '') {
    badges.push(<Badge colorScheme="cyan">兄弟</Badge>);
  }

  if (data.Crew !== '') {
    badges.push(<Badge colorScheme="green">Crew</Badge>);
  }

  if (data.四大長老 !== '') {
    badges.push(<Badge colorScheme="orange">四大長老</Badge>);
  }

  if (badges.length === 0) {
    // Render a message or component if no badges are to be shown
    return <p>No badges available</p>; // Replace with your desired component
  }

  return <Stack direction="row">{badges}</Stack>;
}

const RundownTimeline = ({
  title,
  index,
  events,
}: {
  title: string;
  index: number;
  events: IEvent[];
}) => {
  const { activeStep } = useSteps({
    index,
    count: events.length,
  });

  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Stepper size="lg" index={activeStep} orientation="vertical" gap="0">
          {events.map((event) => (
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
                {renderBadges(event)}
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default RundownTimeline;
