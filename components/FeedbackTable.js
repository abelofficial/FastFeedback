import NextLink from 'next/link';
import { uniqueId } from 'lodash';
import { Thead, Tbody, Table, Link, Switch, Code } from '@chakra-ui/react';

import { Th, Td, Tr } from './Table';
import RemoveButton from './RemoveButton';

const FeedbackTable = ({ feedbacks }) => {
  return (
    <Table
      backgroundColor="white"
      textAlign="left"
      mx={8}
      borderRadius={8}
      boxShadow="0px 4px 10px rgba(0,0, 0, 0.05)"
    >
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Feedback</Th>
          <Th>Route</Th>
          <Th>Visible</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {feedbacks.map((feedback) => (
          <Tr key={feedback.id}>
            <Td fontWeight="medium">{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <NextLink href={`/feedbacks/${feedback.id}`}>
                <Link color="red.400" _hover={{ color: 'red.600' }}>
                  <Code> /</Code>
                </Link>
              </NextLink>
            </Td>

            <Td>
              <Switch
                defaultChecked={feedback.status === 'active'}
                colorScheme="teal"
              />
            </Td>
            <Td>
              <RemoveButton feedbackId={feedback.id} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default FeedbackTable;
