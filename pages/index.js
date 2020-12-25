import Head from "next/head";
import Layout from "@/layout";
import Login from "@/components/Login";
import {
  Input,
  Stack,
  Avatar,
  Flex,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import Post from "@/components/Post";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* <Login /> */}
      <Box w="100%">
        <Flex align="center">
          <Avatar size="md" mr={2} />
          <Input
            variant="outline"
            bg="white"
            placeholder="Whats on your mind, Freddie?"
          />
        </Flex>
      </Box>

      <Divider my={5} />

      <Stack w="100%">
        <Post />
        <Post />
        <Post />

        <Button>Show more</Button>
      </Stack>
    </Layout>
  );
}
