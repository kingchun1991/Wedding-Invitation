/* eslint-disable react/prop-types */
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
              {selectedEvent.新郎 && <p>新郎: {selectedEvent.新郎}</p>}
              {selectedEvent.新娘 && <p>新娘: {selectedEvent.新娘}</p>}
              {selectedEvent.姊妹 && <p>姊妹: {selectedEvent.姊妹}</p>}
              {selectedEvent.兄弟 && <p>兄弟: {selectedEvent.兄弟}</p>}
              {selectedEvent.Crew && <p>Crew: {selectedEvent.Crew}</p>}
              {selectedEvent.四大長老 && (
                <p>四大長老: {selectedEvent.四大長老}</p>
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
