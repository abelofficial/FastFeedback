import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';

const FeedbackHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem fontSize="sm">
          <BreadcrumbLink color="gray.500">Feedback</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading size="xl" mb={8} display="inline">
        My Feedbacks
      </Heading>
    </>
  );
};

export default FeedbackHeader;
