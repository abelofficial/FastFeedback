import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export const Table = (props) => {
  return (
    <Box
      as="Table"
      backgroundColor="white"
      textAlign="left"
      borderRadius={8}
      {...props}
    />
  );
};

export const Th = (props) => {
  return (
    <Text
      as="th"
      textTransform="uppercase"
      color="gray.600"
      backgroundColor="gray.200"
      fontSize="xs"
      fontWeight="medium"
      px={4}
      {...props}
    />
  );
};

export const Tr = (props) => {
  return (
    <Box
      as="tr"
      backgroundColor="gray.50"
      borderTopLeftRadius={8}
      borderTopRightRadius={8}
      borderBottom="1px solid"
      borderBottomColor="gray.200"
      height="40px"
      {...props}
    />
  );
};

export const Td = (props) => {
  return (
    <Text
      as="td"
      color="gray.900"
      p={4}
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      {...props}
    />
  );
};
