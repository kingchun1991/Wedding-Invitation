import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        {new Date('2023-11-11').toDateString()} -{' '}
        <Link
          href="https://wedding-invitation-orpin.vercel.app/"
          isExternal
          rel="noopener noreferrer"
        >
          Waiwai & Frank
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
