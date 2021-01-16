import { Flex, Avatar, Heading, Button } from "@chakra-ui/react";

const Follower = ({ _id, username, avatarUrl }) => {
  return (
    <Flex
      w="100%"
      bg="white"
      borderRadius="md"
      justifyContent="space-between"
      p={2}
      align="center"
      boxShadow="sm"
    >
      <Flex align="center">
        <Avatar size="sm" mr={2} />
        <Heading fontSize="lg">{username}</Heading>
      </Flex>

      <Button>Follow</Button>
    </Flex>
  );
};

export default Follower;
