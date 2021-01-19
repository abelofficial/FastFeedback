import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Code, Flex, Heading, Text } from '@chakra-ui/react';
import { useAuth } from '@lib/auth';
import * as Icons from '@components/icons';

export default function Home() {
  const auth = useAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    const authRes = await auth.signinWithGithub();

    router.push('/dashboard');
  };

  return (
    <div>
      <Head>
        <title>Fast feedback</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
          window.location.href = "/dashboard"
        }`
          }}
        />
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

        {auth.user ? (
          <Button
            variant="ghost"
            size="sm"
            colorScheme="teal"
            onClick={() => router.push('/dashboard')}
          >
            View dashboard
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            colorScheme="teal"
            onClick={handleSignIn}
          >
            Signin
          </Button>
        )}
      </Flex>
    </div>
  );
}
