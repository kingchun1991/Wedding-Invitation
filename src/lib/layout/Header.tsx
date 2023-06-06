import { Box, Flex, Heading } from '@chakra-ui/react';

import CountdownTimer from './Countdown';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const targetDate = new Date();
  // set the target date to 11 Nov 2023
  targetDate.setDate(11);
  targetDate.setMonth(11);
  targetDate.setFullYear(2023);
  targetDate.setHours(17);
  targetDate.setMinutes(30);
  return (
    <Flex as="header" width="full" align="center">
      <CountdownTimer targetDate={targetDate} />
      <Heading as="h1" size="md">
        Waiwai & Frank
      </Heading>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
