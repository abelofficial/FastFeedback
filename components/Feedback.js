import { Box, Divider, Heading, Text } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';

const Feedback = ({ author, createdAt, text }) => {
  return (
    <Box borderRadius={4} maxWidth="700px">
      <Heading size="sm" as="h3" mb={0} color="gray.900">
        {author}
      </Heading>
      <Text fontSize="0.8rem" color="gray.500" mb={4}>
        {format(parseISO(createdAt), 'PPpp')}
      </Text>
      <Text color="gray.800">{text}</Text>
      <Divider color="gray.300" my={8} />
    </Box>
  );
};
export default Feedback;
