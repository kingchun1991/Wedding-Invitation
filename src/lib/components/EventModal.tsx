/* eslint-disable react/prop-types */
import {
  Badge,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Divider,
} from '@chakra-ui/react';

import type { IEvent } from '../types/event';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedEvent: IEvent | null;
}

const EventModal: React.FC<EventModalProps> = ({
  isOpen,
  onClose,
  selectedEvent,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedEvent?.Description}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {selectedEvent && (
            <>
              {selectedEvent.From && (
                <Text fontSize="xl" as="b">
                  From: {selectedEvent.From}
                </Text>
              )}
              <Divider orientation="horizontal" />
              {selectedEvent.新郎 && (
                <p>
                  <Badge fontSize="1em" colorScheme="blue">
                    新郎
                  </Badge>
                  : {selectedEvent.新郎}
                </p>
              )}
              {selectedEvent.新娘 && (
                <p>
                  {' '}
                  <Badge fontSize="1em" colorScheme="red">
                    新娘
                  </Badge>
                  : {selectedEvent.新娘}
                </p>
              )}
              {selectedEvent.姊妹 && (
                <p>
                  <Badge fontSize="1em" colorScheme="pink">
                    姊妹
                  </Badge>
                  : {selectedEvent.姊妹}
                </p>
              )}
              {selectedEvent.兄弟 && (
                <p>
                  {' '}
                  <Badge fontSize="1em" colorScheme="cyan">
                    兄弟
                  </Badge>
                  : {selectedEvent.兄弟}
                </p>
              )}
              {selectedEvent.Crew && (
                <p>
                  <Badge fontSize="1em" colorScheme="green">
                    Crew
                  </Badge>
                  : {selectedEvent.Crew}
                </p>
              )}
              {selectedEvent.四大長老 && (
                <p>
                  <Badge fontSize="1em" colorScheme="orange">
                    四大長老
                  </Badge>
                  : {selectedEvent.四大長老}
                </p>
              )}
              <Divider orientation="horizontal" />
              {selectedEvent.Material && (
                <Text fontSize="lg">Material: {selectedEvent.Material}</Text>
              )}
            </>
          )}
        </ModalBody>
        <ModalFooter>{/* Add your footer content here */}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EventModal;
