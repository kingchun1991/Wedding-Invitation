/* eslint-disable jsx-a11y/iframe-has-title */

'use client';

import { Flex, Image } from '@chakra-ui/react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';

import SomeText from '~/lib/components/samples/SomeText';
import Timeline from '~/lib/components/Timeline';

const Home = () => {
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
      <SomeText />
      <Image src="/main.png" alt="Main" title="Main" />
      <Timeline />
      {/* <Box>
        <Heading size="md" mb={2}>
          Venue
        </Heading>
        <Text fontSize="md" mb={1}>
          3/F, GRAND BALLROOM
        </Text>
        <Text fontSize="md" mb={1}>
          SHERATON HONG KONG HOTEL & TOWERS
        </Text>
        <Text fontSize="md" mb={1}>
          20 NATHAN ROAD,
        </Text>
        <Text fontSize="md" mb={1}>
          KOWLOON TSIM SHA TSUI,
        </Text>
        <Text fontSize="md">HONG KONG</Text>
        <Text fontSize="md" mt={3}>
          香港九龍尖沙咀彌敦道20號
        </Text>
        <Text fontSize="md" mb={1}>
          香港喜来登酒店 3樓宴會大廳
        </Text>
      </Box> */}

      <AddToCalendarButton
        name="Waiwai and Frank's Wedding"
        options={['Apple', 'Google']}
        location="3/F, GRAND BALLROOM SHERATON HONG KONG HOTEL & TOWERS 20 NATHAN ROAD,
        KOWLOON TSIM SHA TSUI, HONG KONG; 香港九龍尖沙咀彌敦道20號 香港喜来登酒店 3樓宴會大廳
        "
        startDate="2023-11-11"
        endDate="2023-11-11"
        startTime="18:00"
        endTime="23:30"
        timeZone="Asia/Hong_Kong"
        lightMode="system"
        images={['https://wedding-invitation-orpin.vercel.app/main.png']}
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.7758030172154!2d114.17378887485388!3d22.29575177461313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340400f225501327%3A0x30f68dbd767b8da4!2sSheraton%20Hong%20Kong%20Hotel%20And%20Towers%2C%20Nathan%20Rd%2C%20Tsim%20Sha%20Tsui!5e0!3m2!1sen!2shk!4v1685976807561!5m2!1sen!2shk"
        width="400"
        height="300"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Flex>
  );
};

export default Home;
