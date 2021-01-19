import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import { uniqueId } from 'lodash';

import Feedback from '@components/Feedback';
import { CreateFeedback } from '@lib/db';
import { getAllFeedbacks, getAllSites } from '@lib/admin-db';
import { useAuth } from '@lib/auth';

// Generate path for each feedback
export async function getStaticPaths() {
  const { sites, error } = await getAllSites();
  const paths = sites.map((site) => {
    return { params: { siteId: site.id.toString() } };
  });
  return {
    paths,
    fallback: false
  };
}

// Generate initial props for each feedback
export async function getStaticProps(context) {
  const siteId = context.params.siteId;
  const { feedbacks, error } = await getAllFeedbacks(siteId);

  return {
    props: {
      initialFeedbacks: feedbacks
    }
  };
  unstable_revalidation: 1;
}

const SiteFeedback = ({ initialFeedbacks }) => {
  const inputText = useRef(null);
  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);
  const router = useRouter();
  const auth = useAuth();

  const onCreateFeedback = (e) => {
    e.preventDefault();

    const newFeedback = {
      author: auth.user.name,
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      provider: auth.user.provider,
      rating: 5,
      siteId: router.query.siteId,
      status: 'pending',
      text: inputText.current.value
    };

    setFeedbacks((preValue) => [newFeedback, ...preValue]);
    CreateFeedback(newFeedback);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="full"
      maxWidth="700px"
      margin="2rem auto"
    >
      <Box as="form" onSubmit={onCreateFeedback}>
        <FormControl id="comment" mb={8}>
          <FormLabel>Comment</FormLabel>
          <Textarea ref={inputText} placeholder="Write your feedback here." />
          <Button type="submit" mt={1}>
            Add comment
          </Button>
        </FormControl>
      </Box>

      {feedbacks.map((feedback) => (
        <Feedback key={uniqueId()} {...feedback}>
          {initialFeedbacks[0].author}
        </Feedback>
      ))}
    </Box>
  );
};

export default SiteFeedback;
