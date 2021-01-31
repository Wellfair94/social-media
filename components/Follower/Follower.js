import { AuthContext } from "contexts/AuthContext";
import { Flex, Avatar, Heading, Button, Box } from "@chakra-ui/react";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";

const Follower = ({ _id, username, avatarUrl, toggleFollow }) => {
  const { session } = useContext(AuthContext);
  const userId = session.user?._id;

  const following = session.user.meta.following;

  const isFollowing = following?.includes(_id);

  return (
    <Flex
      h={userId === _id && "56px"}
      w="100%"
      bg="white"
      borderRadius="md"
      justifyContent="space-between"
      p={2}
      align="center"
      boxShadow="sm"
    >
      <Flex align="center">
        <Link href={`/profile/${username}`}>
          <Avatar size="sm" mr={2} _hover={{ cursor: "pointer" }} />
        </Link>

        <Link href={`/profile/${username}`}>
          <Heading fontSize="lg" _hover={{ cursor: "pointer" }}>
            {username}
          </Heading>
        </Link>
      </Flex>

      {userId === _id ? null : (
        <Button disabled={userId === _id} onClick={() => toggleFollow(_id)}>
          {isFollowing ? "Following" : "Follow"}
        </Button>
      )}
    </Flex>
  );
};

export default Follower;
