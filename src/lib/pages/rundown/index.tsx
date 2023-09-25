/* eslint-disable react/style-prop-object */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/iframe-has-title */

'use client';

import { Flex } from '@chakra-ui/react';

const Rundown = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appkoYwkZGpcKk5Cr/shruOOxgemRzfGGJR?backgroundColor=grayDusty&viewControls=on&layout=grid"
        width="100%"
        height="533"
      />
    </Flex>
  );
};

export default Rundown;
