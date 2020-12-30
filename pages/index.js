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
  HStack,
} from "@chakra-ui/react";
import Post from "@/components/Post";
import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const posts = [
  {
    id: 1,
    user: {
      id: 1,
      email: "freddie.wellfair@gmail.com",
      username: "Wellfair94",
      avatarUrl: "",
    },
    upvotes: 12,
    comments: [
      {
        id: 1,
        createdOn: "timestamp",
        user: {
          id: 1,
          email: "freddie.wellfair@gmail.com",
          username: "Wellfair94",
          avatarUrl: "",
        },
        body: "I love React, Chakra UI and Next.js",
      },
      {
        id: 2,
        createdOn: "timestamp",
        user: {
          id: 1,
          email: "freddie.wellfair@gmail.com",
          username: "Wellfair94",
          avatarUrl: "",
        },
        body: "I love React!",
      },
    ],
    downvotes: 5,
    body: "This is a post by Freddie",
    createdOn: "timestamp",
    starredBy: [],
  },
  {
    id: 2,
    user: {
      id: 2,
      email: "toby.wellfair@gmail.com",
      username: "TobyWellfair",
      avatarUrl: "",
    },
    upvotes: 10,
    comments: [
      {
        id: 1,
        createdOn: "timestamp",
        user: {
          id: 1,
          email: "freddie.wellfair@gmail.com",
          username: "Wellfair94",
          avatarUrl: "",
        },
        body: "I love React, Chakra UI and Next.js",
      },
    ],
    downvotes: 2,
    body: "This is a post by Toby",
    createdOn: "timestamp",
    starredBy: [],
  },
];

const feedButtons = ["Hot", "Recent", "Following"];

export default function Home() {
  const [feed, setFeed] = useState("Hot");
  const { session } = useContext(AuthContext);
  const { isLoggedIn } = session;

  return (
    <>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <Layout>
          <Head>
            <title>Create Next App</title>
          </Head>
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

          <HStack justifyContent="flex-start" w="100%" mb={2}>
            {feedButtons.map((item) => (
              <Button
                key={item}
                borderRadius="full"
                variant="solid"
                onClick={() => setFeed(item)}
                _hover={{ cursor: "pointer" }}
              >
                {item}
              </Button>
            ))}
          </HStack>

          <Stack w="100%">
            {posts.map(({ id, user, upvotes, comments, downvotes, body }) => (
              <Post
                key={id}
                user={user}
                upvotes={upvotes}
                comments={comments}
                downvotes={downvotes}
                body={body}
              />
            ))}
          </Stack>
          <Button mt={5}>Show more</Button>
        </Layout>
      )}
    </>
  );
}
