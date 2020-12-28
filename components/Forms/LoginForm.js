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

const LoginForm = ({ onOpen }) => {
  const handleSubmit = (values, actions) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
    }, 1000);
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
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
            <Field name="email">
              {({ field, form }) => (
                <FormControl>
                  <Input
                    {...field}
                    id="name"
                    bg="white"
                    type="email"
                    variant="outline"
                    placeholder="Email"
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
