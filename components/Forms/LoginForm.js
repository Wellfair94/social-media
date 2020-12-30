import { Formik, Form, Field } from "formik";
import {
  Stack,
  FormControl,
  FormErrorMessage,
  Button,
  Input,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

const LoginForm = ({ onOpen }) => {
  const { login } = useContext(AuthContext);

  // ! Add error handling for login
  const handleSubmit = (values, actions) => {
    login(values.username, values.password);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
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
            <Field name="username">
              {({ field, form }) => (
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    bg="white"
                    variant="outline"
                    placeholder="Username"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="password">
              {({ field, form }) => (
                <FormControl>
                  <Input
                    {...field}
                    id="password"
                    bg="white"
                    type="password"
                    variant="outline"
                    placeholder="Password"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button isFullWidth type="submit" isLoading={isSubmitting}>
              Login
            </Button>

            <Divider />

            <Flex justifyContent="center">
              <Button w="150px" onClick={onOpen}>
                Create account
              </Button>
            </Flex>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
