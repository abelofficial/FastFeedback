import NextLink from 'next/link';
import { format, parseISO } from 'date-fns';
import { uniqueId } from 'lodash';
import { Thead, Tbody, Table, Link } from '@chakra-ui/react';

import { Th, Td, Tr } from './Table';

const SitesTable = ({ sites }) => {
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
          <Th>Site Link</Th>
          <Th>Feedback Link</Th>
          <Th>Date Added</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sites.map((site) => (
          <Tr key={site.id}>
            <Td fontWeight="medium">{site.name}</Td>
            <Td>{site.url}</Td>
            <Td>
              <NextLink href={`/feedbacks/${site.id}`}>
                <Link color="blue.400" _hover={{ color: 'blue.600' }}>
                  View Feedback
                </Link>
              </NextLink>
            </Td>

            <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SitesTable;
