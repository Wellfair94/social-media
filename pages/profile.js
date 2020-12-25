import Follower from "@/components/Follower";
import Post from "@/components/Post";
import Layout from "@/layout";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

export default function Profile() {
  const [tab, setTab] = useState("posts");

  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>

      <Stack
        align="center"
        borderRadius="md"
        bg="tomato"
        w="100%"
        mt="calc(48px)"
        p={2}
      >
        <Avatar size="xl" mt="calc(-48px + -0.5rem)" />
        <Heading>Freddie Wellfair</Heading>

        <Button>Follow</Button>

        <HStack justifyContent="space-evenly" w="100%">
          <Flex w="25%">
            <Button bg="none" onClick={() => setTab("posts")}>
              1 Post
            </Button>
          </Flex>

          <Flex w="25%">
            <Button bg="none" onClick={() => setTab("followers")}>
              0 Followers
            </Button>
          </Flex>

          <Flex w="25%">
            <Button bg="none" onClick={() => setTab("following")}>
              2 Following
            </Button>
          </Flex>
        </HStack>

        <Divider />

        <Flex w="100%">
          <Heading fontSize="lg" textAlign="left">
            {tab === "posts"
              ? "Recent Posts"
              : tab === "followers"
              ? "Followers"
              : "Following"}
          </Heading>
        </Flex>

        {tab === "posts" ? (
          <>
            <Post />
            <Post />
          </>
        ) : tab === "followers" ? (
          <>
            <Follower />
            <Follower />
            <Follower />
          </>
        ) : (
          <>
            <Follower />
            <Follower />
            <Follower />
          </>
        )}
      </Stack>
    </Layout>
  );
}
