import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Stack,
  Link,
  Avatar,
  Button,
  SkeletonCircle
} from '@chakra-ui/react';

import { Logo } from '@components/Icons';
import { useAuth } from '@lib/auth';
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
          <Logo boxSize="1.5rem" />
          <Link href="/dashboard" fontWeight="medium">
            Sites
          </Link>
          <Link href="/feedback" fontWeight="medium">
            Feedback
          </Link>
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
      <Box backgroundColor="gray.100" width="100%" minHeight="100vh">
        <Flex direction="column" pt={8} pb={16} width="80%" ml="auto" mr="auto">
          {children}
        </Flex>
      </Box>
    </Flex>
  );
};
export default DashboardShell;
