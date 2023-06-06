import {
  Box,
  StatGroup,
  StatNumber,
  Stat,
  StatHelpText,
} from '@chakra-ui/react';
import type React from 'react';
import { useState, useEffect } from 'react';

interface TimeRemaining {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const getTimeRemaining = (endDate: Date): TimeRemaining => {
    const total =
      Date.parse(endDate.toString()) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    getTimeRemaining(targetDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <Box marginRight="auto">
      <Box>
        <StatGroup gap={4}>
          <Stat>
            <StatNumber>{timeRemaining.days}</StatNumber>
            <StatHelpText>days</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber>{timeRemaining.hours}</StatNumber>{' '}
            <StatHelpText>hours </StatHelpText>
          </Stat>
          <Stat>
            <StatNumber>{timeRemaining.minutes}</StatNumber>{' '}
            <StatHelpText>minutes</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber>{timeRemaining.seconds}</StatNumber>
            <StatHelpText> seconds</StatHelpText>
          </Stat>
        </StatGroup>
      </Box>
    </Box>
  );
};

export default CountdownTimer;
