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
        {Object.keys(sites).map((site) => (
          <Tr key={site}>
            <Td>{sites[site].name}</Td>
            <Td>{sites[site].url}</Td>
            <Td>
              <Link> View Feedback</Link>
            </Td>

            <Td>{sites[site].createdAt}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default SitesTable;
