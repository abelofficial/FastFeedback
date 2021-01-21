import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';

const SiteHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem fontSize="sm">
          <BreadcrumbLink color="gray.500">Sites</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex direction="row" justify="space-between">
        <Heading size="xl" mb={8} display="inline">
          My Sites
        </Heading>
        <AddSiteModal> Add site </AddSiteModal>
      </Flex>
    </>
  );
};

export default SiteHeader;
