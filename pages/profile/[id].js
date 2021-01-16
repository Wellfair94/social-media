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
import { useState, useContext } from "react";
import { followProfile } from "@/lib/profile";

export async function getServerSideProps({ query }) {
  const { id } = query;

  const profileData = await UserCollection.findOne({
    _id: id,
  });

  if (!profileData) {
    return {
      notFound: true,
    };
  }
  const { _id, username, bio, meta } = profileData;
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
  const { session } = useContext(AuthContext);
  const userId = session.user?._id;
  const { _id, username, bio, meta } = profileData;
  const [metaData, setMetaData] = useState({
    followers: meta.followers,
    following: meta.following,
    posts: meta.posts,
  });
  const { followers, following, posts } = metaData;
  const [isFollowing, setIsFollowing] = useState(() =>
    followers.includes(userId)
  );
  const [updatedFollowersData, setUpdatedFollowersData] = useState(
    followersData
  );

  const toggleFollow = () => {
    followProfile(_id).then(({ followers, newFollower, removedFollower }) => {
      setIsFollowing(!isFollowing);

      if (newFollower) {
        setUpdatedFollowersData([...updatedFollowersData, newFollower]);
      } else {
        const removeFollower = updatedFollowersData.filter(
          (item) => item === removedFollower._id
        );
        setUpdatedFollowersData(removeFollower);
      }

      setMetaData({ ...metaData, followers: followers });
    });
  };

  console.log(updatedFollowersData);

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

        {session?.user?._id === _id ? null : (
          <Button onClick={toggleFollow}>
            {!isFollowing ? "Follow" : "Following"}
          </Button>
        )}

        <HStack w="100%" justifyContent="space-evenly">
          <Flex w="33%" justifyContent="center">
            <Button bg="none" onClick={() => setTab("posts")}>
              {posts.length} Post{posts.length === 1 ? "" : "s"}
            </Button>
          </Flex>

          <Flex w="33%" justifyContent="center">
            <Button bg="none" onClick={() => setTab("followers")}>
              {followers.length} Follower{followers.length === 1 ? "" : "s"}
            </Button>
          </Flex>

          <Flex w="33%" justifyContent="center">
            <Button bg="none" onClick={() => setTab("following")}>
              {following.length} Following
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

              <Flex justifyContent="center">
                <Button mt={5}>Show more</Button>
              </Flex>
            </>
          ) : tab === "followers" ? (
            <>
              <Stack>
                {updatedFollowersData.map(({ _id, username, avatarUrl }) => (
                  <Follower
                    key={_id}
                    id={_id}
                    username={username}
                    avatarUrl={avatarUrl}
                  />
                ))}
              </Stack>

              <Flex justifyContent="center">
                <Button mt={5}>Show more</Button>
              </Flex>
            </>
          ) : (
            <>
              <Stack>
                {followingData.map(({ _id, username, avatarUrl }) => (
                  <Follower
                    key={_id}
                    id={_id}
                    username={username}
                    avatarUrl={avatarUrl}
                  />
                ))}
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
