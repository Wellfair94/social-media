import Layout from "@/layout";
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import LoginForm from "@/components/Forms/LoginForm";
import SignUpForm from "@/components/Forms/SignUpForm";

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout>
      <Modal isOpen={isOpen} onClose={onClose} size="xs" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pt={10}>Create account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
            <SignUpForm />
          </ModalBody>
        </ModalContent>
      </Modal>

      <Flex align="center" h="calc(100vh - 120px)">
        <LoginForm onOpen={onOpen} />
      </Flex>
    </Layout>
  );
}
