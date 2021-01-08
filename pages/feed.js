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
  Spinner,
} from "@chakra-ui/react";
import Post from "@/components/Post";
import { useState, useContext } from "react";
import PostCollection from "@/models/Post";
import { AuthContext } from "@/contexts/AuthContext";
import { RiSendPlaneFill } from "react-icons/ri";

export async function getServerSideProps(context) {
  const posts = await PostCollection.find({});

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      postsData: JSON.parse(JSON.stringify(posts)).reverse(),
    },
  };
}

export default function Feed({ postsData }) {
  const [posts, setPosts] = useState(postsData);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const { session } = useContext(AuthContext);
  const { username } = session.user || "";

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const createPost = async (e) => {
    e.preventDefault();

    if (input === "") {
      return;
    }

    setLoading(true);

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
        }),
      }).then((res) => res.json());

      setPosts([res, ...posts]);
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => {
      setLoading(false);
    }, 500);
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
              id={_id}
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
