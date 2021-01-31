import Head from "next/head";
import Layout from "layout";
import {
  Input,
  Stack,
  Avatar,
  Flex,
  Box,
  Divider,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
  Spinner,
  Circle,
  HStack,
} from "@chakra-ui/react";
import Post from "components/Post";
import { useState, useContext } from "react";
import PostCollection from "models/Post";
import { AuthContext } from "contexts/AuthContext";
import { RiSendPlaneFill } from "react-icons/ri";
import { sendPost } from "lib/post";
import Link from "next/link";
import { useRefreshServerSideProps } from "hooks/useRefreshServerSideProps";

export async function getServerSideProps() {
  const posts = await PostCollection.find({});

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)).reverse(),
    },
  };
}

export default function Feed({ posts }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { session } = useContext(AuthContext);
  const { username } = session.user || "";
  const { refreshServerSideProps } = useRefreshServerSideProps();

  const createPost = async (e) => {
    e.preventDefault();

    if (input === "") return;

    setLoading(true);

    sendPost(input).then(() => {
      setInput("");
      refreshServerSideProps();
    });

    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>

      {/* 
      STORIES
      <HStack
        p={3}
        bg="tomato"
        spacing={4}
        mb={5}
        justifyContent="flex-start"
        w="100%"
        overflow="hidden"
      >
        <Avatar size="md" />
        <Avatar size="md" />
        <Avatar size="md" />
      </HStack> */}

      <Box w="100%">
        <Flex align="center">
          <Link href={`/profile/${username}`}>
            <Avatar size="md" mr={2} _hover={{ cursor: "pointer" }} />
          </Link>

          <Box as="form" onSubmit={createPost} w="100%">
            <InputGroup>
              <Input
                variant="outline"
                bg="white"
                placeholder="What's on your mind?"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <InputRightElement
                children={
                  <IconButton
                    disabled={loading}
                    bg="none"
                    borderBottomLeftRadius="none"
                    borderTopLeftRadius="none"
                    type="submit"
                    icon={loading ? <Spinner size="sm" /> : <RiSendPlaneFill />}
                  />
                }
              />
            </InputGroup>
          </Box>
        </Flex>
      </Box>
      <Divider my={5} />
      <Stack w="100%">
        {posts?.map(({ _id, postedBy, createdOn, meta, body }) => (
          <Post
            key={_id}
            _id={_id}
            postedBy={postedBy}
            createdOn={createdOn}
            meta={meta}
            body={body}
          />
        ))}
      </Stack>
      {/* <Button mt={5}>Show more</Button> */}
    </Layout>
  );
}
