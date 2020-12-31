import Head from "next/head";
import Layout from "@/layout";
import {
  Input,
  Stack,
  Avatar,
  Flex,
  Box,
  Divider,
  Button,
  HStack,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import Post from "@/components/Post";
import { useState, useEffect, useContext } from "react";
import PostCollection from "@/models/Post";
import { AuthContext } from "@/contexts/AuthContext";
import { RiSendPlaneFill } from "react-icons/ri";

const feedButtons = ["Hot", "Recent", "Following"];

export async function getServerSideProps(context) {
  const posts = await PostCollection.find({});

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default function Home({ posts }) {
  const [input, setInput] = useState("");
  const [feed, setFeed] = useState("Hot");
  const { session } = useContext(AuthContext);
  const { user, username } = session.user || "";

  const handleChange = (e) => {
    e.preventDefault();

    setInput(e.target.value);
  };

  const createPost = async () => {
    if (input === "") {
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          body: input,
          postedBy: {
            user: user,
          },
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Box w="100%">
        <Flex align="center">
          <Avatar size="md" mr={2} />
          <Box as="form" onSubmit={createPost} w="100%">
            <InputGroup>
              <Input
                variant="outline"
                bg="white"
                placeholder={`Whats on your mind, ${username}?`}
                onChange={handleChange}
              />
              <InputRightElement
                children={
                  <IconButton
                    bg="none"
                    borderBottomLeftRadius="none"
                    borderTopLeftRadius="none"
                    type="submit"
                    icon={<RiSendPlaneFill />}
                  />
                }
              />
            </InputGroup>
          </Box>
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
        {posts?.map(
          ({
            _id,
            postedBy,
            createdOn,
            upvotes,
            comments,
            downvotes,
            body,
          }) => (
            <Post
              key={_id}
              postedBy={postedBy}
              createdOn={createdOn}
              upvotes={upvotes}
              comments={comments}
              downvotes={downvotes}
              body={body}
            />
          )
        )}
      </Stack>
      <Button mt={5}>Show more</Button>
    </Layout>
  );
}
