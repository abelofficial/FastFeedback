import { useState, useRef } from 'react';
import { mutate } from 'swr';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  IconButton,
  Button,
  useToast
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { DeleteFeedback } from '@lib/db';

import { useAuth } from '@lib/auth';

const RemoveButton = ({ feedbackId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef();
  const toast = useToast();
  const auth = useAuth();
  const onClose = () => setIsOpen(false);

  const onDeleteFeedback = () => {
    DeleteFeedback(feedbackId);

    mutate(
      ['/api/feedback', auth.user.token],
      async (data) => {
        return {
          feedbacks: data.feedbacks.filter(
            (feedback) => feedback.id !== feedbackId
          )
        };
      },
      false
    );

    toast({
      title: 'Feedback deleted',
      description: 'The feedback has been successfully deleted',
      status: 'success',
      duration: 5000,
      isClosable: true
    });

    onClose();
  };

  return (
    <>
      <IconButton
        variant="ghost"
        icon={<DeleteIcon color="red.500" />}
        onClick={() => setIsOpen(true)}
      />
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onDeleteFeedback} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default RemoveButton;
