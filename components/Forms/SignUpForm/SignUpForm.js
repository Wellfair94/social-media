import { Formik, Form, Field } from "formik";
import {
  Stack,
  FormControl,
  FormErrorMessage,
  Button,
  Input,
} from "@chakra-ui/react";
import { AuthContext } from "contexts/AuthContext";
import { useContext, useState } from "react";

const SignUpForm = () => {
  const { signUp } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  console.log(success);

  return (
    <Formik
      initialValues={{ email: "", username: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        signUp(
          values.email,
          values.username,
          values.password,
          setSubmitting,
          setSuccess
        );
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack spacing={3}>
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

            <Field name="username">
              {({ field, form }) => (
                <FormControl>
                  <Input
                    {...field}
                    id="username"
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
                    variant="outline"
                    placeholder="Password"
                    type="password"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button isFullWidth type="submit" isLoading={isSubmitting}>
              Sign Up
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
