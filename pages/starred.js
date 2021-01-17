import Post from "@/components/Post";
import Layout from "@/layout";
import { StarIcon } from "@chakra-ui/icons";
import { Heading, Divider, Stack, Button, Flex } from "@chakra-ui/react";
import Head from "next/head";

export async function getServerSideProps() {
  const starred = [];

  const posts = await PostCollection.find({ _id: { $in: starred } });

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

export default function Starred({ postsData }) {
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
        {postsData.map(({ id, user, meta, body }) => (
          <Post key={id} user={user} meta={meta} body={body} />
        ))}
      </Stack>
      <Button mt={5}>Show more</Button>
    </Layout>
  );
}
