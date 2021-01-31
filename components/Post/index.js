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
import { sendUpvote, sendComment, sendDownvote, starPost } from "@/lib/post";
import Link from "next/link";

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

    if (input === "") {
      return;
    }

    setLoading(true);

    try {
      commentPost();
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  const upvotePost = () => {
    sendUpvote(_id).then((res) => setMetaData(res));
  };

  const commentPost = () => {
    sendComment(_id, input).then((res) => {
      setMetaData(res);
      setInput("");
      setOpen(true);
    });
  };

  const downvotePost = () => {
    sendDownvote(_id).then((res) => setMetaData(res));
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
        <Link href={`/profile/${username}`}>
          <Flex align="center" _hover={{ cursor: "pointer" }}>
            <Avatar size="sm" mr={2} />
            <Heading size="md">{username}</Heading>
          </Flex>
        </Link>
      </Flex>
      <Text fontSize="lg">{body}</Text>

      <Text fontSize="xs">{formatted}</Text>

      <Box>
        <Divider my={2} />
        <HStack w="100%" justify="space-between" color="brand.darkGrey">
          <Button w="32%" bg="none" onClick={upvotePost}>
            <ArrowUpIcon mr={1} /> {upvotes}
          </Button>
          <Button w="32%" bg="none" onClick={() => setOpen(!open)}>
            <ChatIcon mr={1} /> {comments?.length}
          </Button>
          <Button w="32%" bg="none" onClick={downvotePost}>
            <ArrowDownIcon mr={1} /> {downvotes > 0 && "-"}
            {downvotes}
          </Button>
        </HStack>

        <Stack mt={2}>
          <Flex align="center">
            <Link href={`/profile/${username}`}>
              <Avatar size="sm" mr={2} _hover={{ cursor: "pointer" }} />
            </Link>
            <Box as="form" w="100%" onSubmit={handleSubmit}>
              <InputGroup>
                <Input
                  value={input}
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
          {open &&
            comments
              .map(({ _id, postedBy, body }) => (
                <Comment key={_id} postedBy={postedBy} body={body} />
              ))
              .reverse()}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Post;
