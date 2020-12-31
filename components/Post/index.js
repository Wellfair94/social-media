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
} from "@chakra-ui/react";
import { useState } from "react";
import Comment from "@/components/Comment";

const Post = ({ postedBy, createdOn, upvotes, comments, downvotes, body }) => {
  const [open, setOpen] = useState(false);

  const { user, username, avatarUrl } = postedBy;

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

      <Text fontSize="xs">{createdOn}</Text>

      <Box>
        <Divider my={2} />
        <HStack w="100%" justify="space-between" color="brand.darkGrey">
          <Button w="32%" bg="none">
            <ArrowUpIcon mr={1} /> {upvotes.length}
          </Button>
          <Button w="32%" bg="none" onClick={() => setOpen(!open)}>
            <ChatIcon mr={1} /> {comments.length}
          </Button>
          <Button w="32%" bg="none">
            <ArrowDownIcon mr={1} /> {downvotes.length}
          </Button>
        </HStack>

        {open ? (
          <Stack mt={2}>
            <Flex align="center">
              <Avatar size="sm" mr={2} />
              <Input
                h="32px"
                variant="outline"
                placeholder="Write a comment..."
              />
            </Flex>

            {comments.map(({ id, user, body }) => (
              <Comment key={id} user={user} body={body} />
            ))}
          </Stack>
        ) : null}
      </Box>
    </Stack>
  );
};

export default Post;
