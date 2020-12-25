import { Flex, Avatar, Heading, Button } from "@chakra-ui/react";

const Follower = () => {
  return (
    <Flex
      w="100%"
      bg="brand.white"
      borderRadius="md"
      justifyContent="space-between"
      p={2}
      align="center"
    >
      <Flex align="center">
        <Avatar size="sm" mr={2} />
        <Heading fontSize="lg">Joe Bloggs</Heading>
      </Flex>

      <Button>Follow</Button>
    </Flex>
  );
};

export default Follower;
