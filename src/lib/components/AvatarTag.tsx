/* eslint-disable react/prop-types */

import { Avatar, Tag, TagLabel } from '@chakra-ui/react';

interface AvatarTagProps {
  name: string;
  colorScheme: string;
}

const AvatarTag: React.FC<AvatarTagProps> = ({ name, colorScheme }) => {
  return (
    <Tag size="sm" colorScheme={colorScheme} borderRadius="full">
      <Avatar size="xs" name={name} ml={-1} mr={2} />
      <TagLabel>{name}</TagLabel>
    </Tag>
  );
};

export default AvatarTag;
