import { Flex, Avatar, Box, Text, Heading } from "@chakra-ui/react";

const Comment = ({ user, body }) => {
  const { username, avatarUrl } = user;

  return (
    <Flex w="100%" color="brand.darkGrey">
      <Avatar size="sm" mr={2} />
      <Box bg="brand.white" p={2} borderRadius="md" boxShadow="sm">
        <Heading fontSize="sm">{username}</Heading>
        <Text fontSize="sm">{body}</Text>
      </Box>
    </Flex>
  );
};

export default Comment;
