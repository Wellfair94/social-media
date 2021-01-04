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

const Post = ({
  id,
  postedBy,
  createdOn,
  upvotes,
  comments,
  downvotes,
  body,
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username, avatarUrl } = postedBy;

  const formatted = DateTime.fromMillis(createdOn).toLocaleString(
    DateTime.DATETIME_MED
  );

  const commentsData = [
    {
      id: 1,
      createdOn: 1,
      postedBy: {
        user: 1,
        username: "Wellfair94",
        avatarUrl: "",
      },
      body: "test comment",
    },
    {
      id: 1,
      createdOn: 1,
      postedBy: {
        user: 1,
        username: "Wellfair94",
        avatarUrl: "",
      },
      body: "test comment",
    },
  ];

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

            {commentsData.map(({ id, postedBy, body }) => (
              <Comment key={id} postedBy={postedBy} body={body} />
            ))}
          </Stack>
        ) : null}
      </Box>
    </Stack>
  );
};

export default Post;
