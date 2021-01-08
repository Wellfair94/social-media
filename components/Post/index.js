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
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import Comment from "@/components/Comment";
import { DateTime } from "luxon";
import { RiSendPlaneFill } from "react-icons/ri";

const Post = ({ _id, postedBy, createdOn, meta, body }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [metaData, setMetaData] = useState({
    upvotes: meta.upvotes.length,
    comments: meta.comments,
    downvotes: meta.downvotes.length,
  });

  const { upvotes, comments, downvotes } = metaData;

  const { username, avatarUrl } = postedBy;

  const formatted = DateTime.fromMillis(createdOn).toLocaleString(
    DateTime.DATETIME_MED
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      sendComment(input).then(() => setInput(""));
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const sendUpvote = async () => {
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

      setMetaData(res);
    } catch (err) {
      console.log(err);
    }
  };

  const sendComment = async (input) => {
    if (input === "") {
      return;
    }
    // do comment
    try {
      const res = await fetch(`http://localhost:3000/api/posts/${_id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          action: "comment",
          postID: _id,
          body: input,
        }),
      }).then((res) => res.json());

      setMetaData(res);
    } catch (err) {
      console.log(err);
    }
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

      setMetaData(res);
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
            <ArrowUpIcon mr={1} /> {upvotes}
          </Button>
          <Button w="32%" bg="none" onClick={() => setOpen(!open)}>
            <ChatIcon mr={1} /> {comments?.length}
          </Button>
          <Button w="32%" bg="none" onClick={sendDownvote}>
            <ArrowDownIcon mr={1} /> {downvotes > 0 && "-"}
            {downvotes}
          </Button>
        </HStack>

        {open ? (
          <Stack mt={2}>
            <Flex align="center">
              <Avatar size="sm" mr={2} />
              <Box as="form" w="100%" onSubmit={handleSubmit}>
                <InputGroup>
                  <Input
                    variant="outline"
                    placeholder="Write a comment..."
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <InputRightElement
                    children={
                      <IconButton
                        type="submit"
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
              </Box>
            </Flex>

            {comments
              .map(({ _id, postedBy, body }) => (
                <Comment key={_id} postedBy={postedBy} body={body} />
              ))
              .reverse()}
          </Stack>
        ) : null}
      </Box>
    </Stack>
  );
};

export default Post;
