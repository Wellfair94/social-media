import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  HStack,
  Stack,
  Heading,
  IconButton,
  Divider,
  Input,
} from "@chakra-ui/react";

const Chat = ({ setToggleChat }) => {
  return (
    <Stack w="100%" bg="white" p={3}>
      <HStack w="100%">
        <IconButton
          bg="none"
          onClick={setToggleChat}
          mr={2}
          icon={<ArrowBackIcon />}
        />

        <Flex justifyContent="center" align="center">
          <Avatar size="md" mr={2} />
          <Heading fontSize="xl">Wellfair94</Heading>
        </Flex>
      </HStack>
      <Divider />
      <Stack w="100%" bg="tomato" h="200px"></Stack>
      <Input />
    </Stack>
  );
};

export default Chat;
