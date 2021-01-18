import { Button, Code, Heading, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { useAuth } from '@lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Fast feedback</title>
      </Head>
      <main>
        <Heading>Fast Feedback</Heading>

        {auth.user ? (
          <>
            <Text>
              The current user is <Code>{auth.user.name} </Code>
            </Text>
            <Button onClick={(e) => auth.signout()}>Signout</Button>
          </>
        ) : (
          <>
            <Text>No signed in user</Text>
            <Button onClick={(e) => auth.signinWithGithub()}>SignIn</Button>
          </>
        )}
      </main>
    </div>
  );
}
