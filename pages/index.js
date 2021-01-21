import Head from 'next/head';
import { useRouter } from 'next/router';

import { Button, Code, Flex, Heading, Text } from '@chakra-ui/react';
import { useAuth } from '@lib/auth';
import { Logo, Github, Google } from '@components/Icons';

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
        <Logo color="red" boxSize="2rem" />

        {auth.user ? (
          <Button
            variant="ghost"
            size="sm"
            colorScheme="teal"
            backgroundColor="white.100"
            color="gray.700"
            fontWeight="medium"
            _hover={{ bg: 'gray.200' }}
            _active={{ bg: 'gray.200', transform: 'scale(0.95)' }}
            onClick={() => router.push('/dashboard')}
          >
            View dashboard
          </Button>
        ) : (
          <>
            <Button
              onClick={async () => await auth.signinWithGithub()}
              leftIcon={<Github />}
              my={4}
              backgroundColor="gray.900"
              color="white"
              fontWeight="medium"
              _hover={{ bg: 'gray.t00' }}
              _active={{ bg: 'gray.800', transform: 'scale(0.95)' }}
            >
              Sign In with Github
            </Button>
            <Button
              onClick={async () => await auth.signinWithGoogle()}
              leftIcon={<Google />}
              backgroundColor="white.100"
              color="gray.700"
              fontWeight="medium"
              _hover={{ bg: 'gray.200' }}
              _active={{ bg: 'gray.200', transform: 'scale(0.95)' }}
            >
              Sign In with Google
            </Button>
          </>
        )}
      </Flex>
    </div>
  );
}
