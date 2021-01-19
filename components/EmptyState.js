import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal';
const EmptyState = ({}) => (
  <Flex
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    backgroundColor="whiteAlpha.900"
    borderRadius="4px"
    width="100%"
    py={16}
    px={16}
    maxWidth="800px"
  >
    <Heading mb={2} size="md">
      You haven't added any sites.
    </Heading>
    <Text mb={2}>Let's get started.</Text>
    <AddSiteModal> Add your first site </AddSiteModal>
  </Flex>
);
export default EmptyState;
