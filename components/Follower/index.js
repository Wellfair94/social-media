import { AuthContext } from "@/contexts/AuthContext";
import { Flex, Avatar, Heading, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useContext } from "react";

const Follower = ({
  _id,
  username,
  avatarUrl,
  toggleFollow,
  updatedFollowing,
}) => {
  const { session } = useContext(AuthContext);
  const userId = session.user?._id;

  console.log(updatedFollowing);

  const isFollowing = updatedFollowing.includes(_id);

  return (
    <Flex
      w="100%"
      bg="white"
      borderRadius="md"
      justifyContent="space-between"
      p={2}
      align="center"
      boxShadow="sm"
    >
      <Flex align="center">
        <Link href={`/profile/${_id}`}>
          <Avatar size="sm" mr={2} _hover={{ cursor: "pointer" }} />
        </Link>

        <Link href={`/profile/${_id}`}>
          <Heading fontSize="lg" _hover={{ cursor: "pointer" }}>
            {username}
          </Heading>
        </Link>
      </Flex>

      <Button disabled={userId === _id} onClick={() => toggleFollow(_id)}>
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </Flex>
  );
};

export default Follower;
