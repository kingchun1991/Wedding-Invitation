import { Box, Flex } from '@chakra-ui/react';

import CountdownTimer from './CountdownTimer';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const targetDate = new Date();
  // set the target date to 11 Nov 2023
  targetDate.setDate(11);
  targetDate.setMonth(10); // November is zero-indexed, so 10 represents November
  targetDate.setFullYear(2023);
  targetDate.setHours(17);
  targetDate.setMinutes(30);
  return (
    <Flex as="header" width="full" align="center">
      <CountdownTimer targetDate={targetDate} />
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
