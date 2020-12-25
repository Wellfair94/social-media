import { Flex, Avatar, Box, Text, Heading } from "@chakra-ui/react";

const Comment = () => {
  return (
    <Flex w="100%" color="brand.darkGrey">
      <Avatar size="sm" mr={2} />
      <Box bg="brand.white" p={2} borderRadius="md" boxShadow="sm">
        <Heading fontSize="sm">Freddie Wellfair</Heading>
        <Text fontSize="sm">This is an example of a comment</Text>
      </Box>
    </Flex>
  );
};

export default Comment;
