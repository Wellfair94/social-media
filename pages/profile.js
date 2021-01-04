import Follower from "@/components/Follower";
import Post from "@/components/Post";
import Layout from "@/layout";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

const posts = [];

// export async function getServerSideProps(context) {}

export default function Profile() {
  const [tab, setTab] = useState("posts");

  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>

      <Stack align="center" borderRadius="md" w="100%">
        <Avatar size="xl" />
        <Heading>Wellfair94</Heading>
        <Text>Write something about yourself.</Text>

        <Button>Follow</Button>

        <HStack w="100%" justifyContent="space-evenly">
          <Flex w="33%" justifyContent="center">
            <Button bg="none" onClick={() => setTab("posts")}>
              1 Post
            </Button>
          </Flex>

          <Flex w="33%" justifyContent="center">
            <Button bg="none" onClick={() => setTab("followers")}>
              0 Followers
            </Button>
          </Flex>

          <Flex w="33%" justifyContent="center">
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

        <Box w="100%">
          {tab === "posts" ? (
            <>
              <Stack w="100%">
                {posts.map(
                  ({ id, user, upvotes, comments, downvotes, body }) => (
                    <Post
                      key={id}
                      user={user}
                      upvotes={upvotes}
                      comments={comments}
                      downvotes={downvotes}
                      body={body}
                    />
                  )
                )}
              </Stack>

              <Flex justifyContent="center">
                <Button mt={5}>Show more</Button>
              </Flex>
            </>
          ) : tab === "followers" ? (
            <>
              <Stack>
                <Follower />
                <Follower />
                <Follower />
              </Stack>

              <Flex justifyContent="center">
                <Button mt={5}>Show more</Button>
              </Flex>
            </>
          ) : (
            <>
              <Stack>
                <Follower />
                <Follower />
                <Follower />
              </Stack>

              <Flex justifyContent="center">
                <Button mt={5}>Show more</Button>
              </Flex>
            </>
          )}
        </Box>
      </Stack>
    </Layout>
  );
}
