import Post from "@/components/Post";
import Layout from "@/layout";
import { StarIcon } from "@chakra-ui/icons";
import { Heading, Divider, Stack, Button, Flex } from "@chakra-ui/react";
import Head from "next/head";

export default function Starred() {
  return (
    <Layout>
      <Head>
        <title>Starred posts</title>
      </Head>

      <Flex align="center" w="100%" textAlign="left">
        <StarIcon size="lg" w={6} h={6} mr={2} />{" "}
        <Heading>Starred Posts</Heading>
      </Flex>

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
