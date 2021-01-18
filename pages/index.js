import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Code, Flex, Heading, Text } from '@chakra-ui/react';
import { useAuth } from '@lib/auth';
import * as Icons from '@components/icons';

export default function Home() {
  const auth = useAuth();
  const router = useRouter();

  const handleSignIn = () => {
    auth.signinWithGithub();
    router.push('/dashboard');
  };

  return (
    <div>
      <Head>
        <title>Fast feedback</title>
      </Head>
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <Heading> Fast Feedback</Heading>
        <Icons.logo color="red" boxSize="2rem" />

        <Button
          variant="ghost"
          size="sm"
          colorScheme="teal"
          onClick={handleSignIn}
        >
          Signin
        </Button>
      </Flex>
    </div>
  );
}
