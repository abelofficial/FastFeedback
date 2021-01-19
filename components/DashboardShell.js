import React from 'react';
import { useRouter } from 'next/router';
import {
  ChakraProvider,
  Box,
  Flex,
  Stack,
  Icon,
  Link,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Button,
  SkeletonCircle
} from '@chakra-ui/react';

import * as Icons from '@components/icons';
import { useAuth } from '@lib/auth';
import AddSiteModal from './AddSiteModal';
const DashboardShell = ({ children }) => {
  const auth = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await auth.signout();
    router.push('/');
  };

  return (
    <Flex direction="column">
      <Flex
        backgroundColor="whiteAlpha.700"
        justifyContent="space-between"
        alignItems="center"
        p={4}
      >
        <Stack spacing={4} display="block" isInline>
          <Icons.logo boxSize="1.5rem" />
          <Link fontWeight="medium">Feedback</Link>
          <Link fontWeight="medium">Sites</Link>
        </Stack>
        <Stack spacing={4} isInline justifyContent="center" alignItems="center">
          <Button
            variant="link"
            color="black"
            fontWeight="medium"
            onClick={handleSignOut}
          >
            Log Out
          </Button>
          {auth.user ? (
            <Avatar size="sm" src={auth.user?.imgUrl} />
          ) : (
            <SkeletonCircle size="10" />
          )}
        </Stack>
      </Flex>
      <Box backgroundColor="gray.100" width="100%" height="100vh">
        <Flex direction="column" pt={8} pb={16} width="80%" ml="auto" mr="auto">
          <Breadcrumb>
            <BreadcrumbItem fontSize="sm">
              <BreadcrumbLink color="gray.500">Sites</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex direction="row" justify="space-between">
            <Heading size="xl" mb={8} display="inline">
              My Sites
            </Heading>
            <AddSiteModal> Add site </AddSiteModal>
          </Flex>

          {children}
        </Flex>
      </Box>
    </Flex>
  );
};
export default DashboardShell;
