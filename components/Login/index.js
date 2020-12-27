import Layout from "@/layout";
import {
  Flex,
  Input,
  Stack,
  Button,
  Text,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Layout>
      <Modal isOpen={isOpen} onClose={onClose} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt={10}>Create account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
            <Stack spacing={3}>
              <Input placeholder="Email" type="email" />
              <Input placeholder="Username" />
              <Input placeholder="Password" type="password" />
              <Input placeholder="Re-type password" type="password" />
              <Button>Sign up</Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>

      <Flex align="center" h="calc(100vh - 120px)">
        <Stack
          justify="center"
          borderRadius="md"
          bg="white"
          w="xs"
          h="xs"
          px={7}
          py={10}
          spacing={3}
          boxShadow="md"
          textAlign="center"
        >
          <Input
            bg="white"
            type="email"
            variant="outline"
            placeholder="Email"
          />
          <Input
            bg="white"
            type="password"
            variant="outline"
            placeholder="Password"
          />
          <Button w="100%">Login</Button>
          <Divider />
          <Flex justifyContent="center">
            <Button w="150px" onClick={onOpen}>
              Create account
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Login;
