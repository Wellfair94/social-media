import Follower from "@/components/Follower";
import Post from "@/components/Post";
import { AuthContext } from "@/contexts/AuthContext";
import Layout from "@/layout";
import UserCollection from "@/models/User";
import PostCollection from "@/models/Post";
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
  Editable,
  EditablePreview,
  EditableInput,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState, useEffect, useContext } from "react";
import { followProfile } from "@/lib/profile";
import { useRouter } from "next/router";

export async function getServerSideProps({ query }) {
  const { username } = query;

  const profileData = await UserCollection.findOne({
    username: username,
  });

  if (!profileData) {
    return {
      notFound: true,
    };
  }

  const { _id, bio, meta } = profileData;
  const { posts, followers, following } = meta;

  const postsData = await PostCollection.find({ _id: { $in: posts } });
  const followersData = await UserCollection.find({ _id: { $in: followers } });
  const followingData = await UserCollection.find({ _id: { $in: following } });

  const filteredFollowersData = followersData.map(
    ({ _id, username, avatarUrl }) => {
      return {
        _id: _id,
        username: username,
        avatarUrl: avatarUrl,
      };
    }
  );

  const filteredFollowingData = followingData.map(
    ({ _id, username, avatarUrl }) => {
      return {
        _id: _id,
        username: username,
        avatarUrl: avatarUrl,
      };
    }
  );

  return {
    props: {
      profileData: JSON.parse(
        JSON.stringify({
          _id: _id,
          username: username,
          bio: bio,
          meta: meta,
        })
      ),
      postsData: JSON.parse(JSON.stringify(postsData)),
      followersData: JSON.parse(JSON.stringify(filteredFollowersData)),
      followingData: JSON.parse(JSON.stringify(filteredFollowingData)),
    },
  };
}

export default function Profile({
  profileData,
  postsData,
  followersData,
  followingData,
}) {
  const [tab, setTab] = useState("posts");
  const { session, refreshFollowing } = useContext(AuthContext);
  const userId = session.user?._id;
  const { _id, username, bio } = profileData;
  const router = useRouter();
  const { asPath } = router;
  const followers = followersData.length;
  const following = followingData.length;
  const posts = postsData.length;

  const isFollowing = followersData.find(({ _id }) => _id === userId);

  useEffect(() => {
    setTab("posts");
  }, [asPath]);

  const toggleFollow = (profileId) => {
    followProfile(profileId).then((res) => {
      if (res?.following) {
        refreshFollowing(res.following);
      }

      refreshData();
    });
  };

  const refreshData = () => {
    router.replace(router.asPath);
  };

  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>

      <Stack align="center" borderRadius="md" w="100%">
        <Avatar size="xl" />
        <Heading>{username}</Heading>
        <Text>{bio}</Text>

        {/* <Editable defaultValue="Take some chakra">
          <EditablePreview _hover={{ cursor: "pointer" }} />
          <EditableInput px={2} />
        </Editable> */}

        {userId === _id ? null : (
          <Button onClick={() => toggleFollow(_id)}>
            {!isFollowing ? "Follow" : "Following"}
          </Button>
        )}

        <HStack w="100%" justifyContent="space-evenly">
          <Flex w="33%" justifyContent="center">
            <Button bg="none" onClick={() => setTab("posts")}>
              {posts} Post{posts === 1 ? "" : "s"}
            </Button>
          </Flex>

          <Flex w="33%" justifyContent="center">
            <Button bg="none" onClick={() => setTab("followers")}>
              {followers} Follower{followers === 1 ? "" : "s"}
            </Button>
          </Flex>

          <Flex w="33%" justifyContent="center">
            <Button bg="none" onClick={() => setTab("following")}>
              {following} Following
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
                {postsData.map(({ _id, postedBy, createdOn, meta, body }) => (
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

              {/* <Flex justifyContent="center">
                <Button mt={5}>Show more</Button>
              </Flex> */}
            </>
          ) : tab === "followers" ? (
            <>
              <Stack>
                {followersData.map(({ _id, username, avatarUrl }) => (
                  <Follower
                    key={_id}
                    _id={_id}
                    username={username}
                    avatarUrl={avatarUrl}
                    toggleFollow={toggleFollow}
                  />
                ))}
              </Stack>
              {/* 
              <Flex justifyContent="center">
                <Button mt={5}>Show more</Button>
              </Flex> */}
            </>
          ) : (
            <>
              <Stack>
                {followingData.map(({ _id, username, avatarUrl }) => (
                  <Follower
                    key={_id}
                    _id={_id}
                    username={username}
                    avatarUrl={avatarUrl}
                    toggleFollow={toggleFollow}
                  />
                ))}
              </Stack>

              {/* <Flex justifyContent="center">
                <Button mt={5}>Show more</Button>
              </Flex> */}
            </>
          )}
        </Box>
      </Stack>
    </Layout>
  );
}
