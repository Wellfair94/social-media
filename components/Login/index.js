import { Flex, Input, Stack, Button, Text, Box } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Flex justify="center" align="center" h="calc(100vh - 60px)">
      <Stack
        justify="center"
        borderRadius="md"
        bg="tomato"
        w="xs"
        h="xs"
        px={7}
        py={10}
        spacing={3}
        boxShadow="md"
      >
        {showLogin ? (
          <>
            <Input bg="white" variant="outline" placeholder="Email" />
            <Input bg="white" variant="outline" placeholder="Password" />
            <Button w="100%">Login</Button>
            <Text>
              Not registered?{" "}
              <Box
                onClick={() => setShowLogin(!showLogin)}
                as="span"
                color="gray.100"
                _hover={{ cursor: "pointer" }}
              >
                Create an account
              </Box>{" "}
            </Text>
          </>
        ) : (
          <>
            <Input bg="white" variant="outline" placeholder="Email" />
            <Input bg="white" variant="outline" placeholder="Username" />
            <Input bg="white" variant="outline" placeholder="Password" />
            <Button isFullWidth>Create Account</Button>
            <Button isFullWidth onClick={() => setShowLogin(!showLogin)}>
              Back
            </Button>
          </>
        )}
      </Stack>
    </Flex>
  );
};

export default Login;
