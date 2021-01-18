import { Thead, Tbody, Table, Skeleton } from '@chakra-ui/react';
import { Th, Td, Tr } from './Table';

const SkeletonRow = ({ width }) => {
  return (
    <Tr>
      <Td>
        <Skeleton height="10px" width={width} />
      </Td>
      <Td>
        <Skeleton height="10px" width={width} />
      </Td>
      <Td>
        <Skeleton height="10px" width={width} />
      </Td>
      <Td>
        <Skeleton height="10px" width={width} />
      </Td>
    </Tr>
  );
};
const SitesTableSkeleton = (params) => {
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
        <SkeletonRow width="75px" />
        <SkeletonRow width="125px" />
        <SkeletonRow width="50px" />
        <SkeletonRow width="100px" />
      </Tbody>
    </Table>
  );
};

export default SitesTableSkeleton;
