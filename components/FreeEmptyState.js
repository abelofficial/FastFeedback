import React from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import DashboardShell from './DashboardShell';
const FreeEmptyState = ({}) => (
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
      Get feedback on your site
    </Heading>
    <Text mb={2}>Start today, then grow with us.</Text>
    <Button fontWeight="medium" size="sm">
      Upgrade to Starter
    </Button>
  </Flex>
);
export default FreeEmptyState;
