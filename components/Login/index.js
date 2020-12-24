import { Flex, Input, Stack, Button, Text } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex justify="center" align="center" h="calc(100vh - 60px)">
      <Stack
        spacing={3}
        justify="center"
        borderRadius="md"
        bg="tomato"
        w="sm"
        h="xs"
        px={7}
        align="center"
      >
        <Input bg="white" variant="outline" placeholder="Username" />
        <Input bg="white" variant="outline" placeholder="Password" />
        <Button w="100%">Login</Button>
        <Text></Text>
      </Stack>
    </Flex>
  );
};

export default Login;
