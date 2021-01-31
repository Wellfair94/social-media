import { Flex, Avatar, Heading, Text } from "@chakra-ui/react";

const Message = ({ setToggleChat }) => {
  return (
    <Flex
      bg="tomato"
      align="center"
      p={3}
      borderRadius="md"
      _hover={{ cursor: "pointer" }}
      onClick={() => setToggleChat((prevState) => !prevState)}
    >
      <Avatar mr={3} />
      <Flex direction="column">
        <Heading fontSize="lg">Wellfair94</Heading>
        <Text noOfLines={1}>
          This is a message that will be cut off when it is too long for its
          parent
        </Text>
      </Flex>
    </Flex>
  );
};

export default Message;
