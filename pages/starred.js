import Post from "@/components/Post";
import Layout from "@/layout";
import { StarIcon } from "@chakra-ui/icons";
import { Heading, Divider, Stack, Button, Flex } from "@chakra-ui/react";
import Head from "next/head";

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

export default function Starred() {
  return (
    <Layout>
      <Head>
        <title>Starred posts</title>
      </Head>

      <Flex align="center" w="100%" textAlign="left">
        <StarIcon w={5} h={5} mr={2} />{" "}
        <Heading fontSize="xl">Starred Posts</Heading>
      </Flex>

      <Divider my={5} />

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
  );
}
