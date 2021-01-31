import { Flex, Avatar, Box, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Comment = ({ postedBy, body }) => {
  const { username, avatarUrl } = postedBy || "";

  return (
    <Flex w="100%" color="brand.darkGrey">
      <Link href={`/profile/${username}`}>
        <Avatar size="sm" mr={2} _hover={{ cursor: "pointer" }} />
      </Link>

      <Box bg="brand.white" p={2} borderRadius="md" boxShadow="sm">
        <Link href={`/profile/${username}`}>
          <Heading fontSize="sm" _hover={{ cursor: "pointer" }}>
            {username}
          </Heading>
        </Link>
        <Text fontSize="sm">{body}</Text>
      </Box>
    </Flex>
  );
};

export default Comment;
