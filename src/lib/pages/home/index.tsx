/* eslint-disable jsx-a11y/iframe-has-title */
import { Flex, Image } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

// import CTASection from '~/lib/components/samples/CTASection';
import SomeImage from '~/lib/components/samples/SomeImage';
import SomeText from '~/lib/components/samples/SomeText';

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
      <NextSeo title="Home" />
      <SomeText />
      <Image src="/main.png" alt="Main" title="Main" />
      <SomeImage />
      <iframe
        width="700"
        height="500"
        src="https://www.openstreetmap.org/export/embed.html?bbox=114.17203009128572%2C22.29408722838851%2C114.17338460683824%2C22.29636045705171&amp;layer=mapnik&amp;marker=22.295223847342772%2C114.17270869016647"
      />
      <br />
      <small>
        <a href="https://www.openstreetmap.org/?mlat=22.29522&amp;mlon=114.17271#map=19/22.29522/114.17271">
          View Larger Map
        </a>
      </small>
      {/* <CTASection /> */}
    </Flex>
  );
};

export default Home;
