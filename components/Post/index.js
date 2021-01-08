import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatIcon,
  StarIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Avatar,
  Heading,
  Text,
  Flex,
  Stack,
  HStack,
  Button,
  Divider,
  Input,
  IconButton,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import Comment from "@/components/Comment";
import { DateTime } from "luxon";
import { RiSendPlaneFill } from "react-icons/ri";

const commentsData = [
  {
    _id: 1,
    createdOn: 1,
    postedBy: {
      _id: 1,
      username: "Wellfair94",
      avatarUrl: "",
    },
    body: "test comment",
  },
  {
    _id: 1,
    createdOn: 1,
    postedBy: {
      _id: 1,
      username: "Wellfair94",
      avatarUrl: "",
    },
    body: "test comment",
  },
];

const Post = ({ _id, postedBy, createdOn, meta, body }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [metaData, setMetaData] = useState({
    upvotes: meta.upvotes,
    comments: meta.comments,
    downvotes: meta.downvotes,
  });

  const { upvotes, comments, downvotes } = metaData;

  const { username, avatarUrl } = postedBy;

  const formatted = DateTime.fromMillis(createdOn).toLocaleString(
    DateTime.DATETIME_MED
  );

  const sendUpvote = async () => {
    // do upvote
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${_id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          action: "upvote",
          postID: _id,
        }),
      }).then((res) => res.json());
    } catch (err) {
      console.log(err);
    }
  };

  const sendComment = () => {
    // do comment
  };

  const sendDownvote = async () => {
    // do downvote
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${_id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          action: "downvote",
          postID: _id,
        }),
      }).then((res) => res.json());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack
      w="100%"
      bg="white"
      boxShadow="md"
      p={4}
      borderRadius="md"
      spacing={4}
      color="brand.darkGrey"
    >
      <Flex align="flex-start" justify="space-between">
        <Flex align="center">
          <Avatar size="sm" mr={2} />
          <Heading size="md">{username}</Heading>
        </Flex>

        <IconButton bg="none" size="sm" aria-label="Star" icon={<StarIcon />} />
      </Flex>
      <Text fontSize="lg">{body}</Text>

      <Text fontSize="xs">{formatted}</Text>

      <Box>
        <Divider my={2} />
        <HStack w="100%" justify="space-between" color="brand.darkGrey">
          <Button w="32%" bg="none" onClick={sendUpvote}>
            <ArrowUpIcon mr={1} /> {upvotes.length}
          </Button>
          <Button w="32%" bg="none" onClick={() => setOpen(!open)}>
            <ChatIcon mr={1} /> {comments.length}
          </Button>
          <Button w="32%" bg="none" onClick={sendDownvote}>
            <ArrowDownIcon mr={1} /> {downvotes.length}
          </Button>
        </HStack>

        {open ? (
          <Stack mt={2}>
            <Flex align="center">
              <Avatar size="sm" mr={2} />
              <InputGroup>
                <Input variant="outline" placeholder="Write a comment..." />
                <InputRightElement
                  children={
                    <IconButton
                      disabled={loading}
                      bg="none"
                      borderBottomLeftRadius="none"
                      borderTopLeftRadius="none"
                      type="submit"
                      icon={
                        loading ? <Spinner size="sm" /> : <RiSendPlaneFill />
                      }
                    />
                  }
                />
              </InputGroup>
            </Flex>

            {commentsData.map(({ _id, postedBy, body }) => (
              <Comment key={_id} postedBy={postedBy} body={body} />
            ))}
          </Stack>
        ) : null}
      </Box>
    </Stack>
  );
};

export default Post;
