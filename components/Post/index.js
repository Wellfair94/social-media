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

const Post = () => {
  const [open, setOpen] = useState(false);

  return (
    <Stack
      w="100%"
      bg="white"
      boxShadow="sm"
      p={4}
      borderRadius="md"
      spacing={4}
      color="brand.darkGrey"
    >
      <Flex align="flex-start" justify="space-between">
        <Flex align="center">
          <Avatar size="sm" mr={2} />
          <Heading size="md">Freddie Wellfair</Heading>
        </Flex>

        <IconButton bg="none" size="sm" aria-label="Star" icon={<StarIcon />} />
        {/* <StarIcon opacity={0.25} _hover={{ cursor: "pointer" }} /> */}
      </Flex>
      <Text fontSize="lg">This is an example of the body of a post</Text>

      <Box>
        <Divider my={2} />
        <HStack w="100%" justify="space-between" color="brand.darkGrey">
          <Button w="32%" bg="none">
            <ArrowUpIcon mr={1} /> 170
          </Button>
          <Button w="32%" bg="none" onClick={() => setOpen(!open)}>
            <ChatIcon mr={1} /> 120
          </Button>
          <Button w="32%" bg="none">
            <ArrowDownIcon mr={1} /> 100
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

            <Comment />
          </Stack>
        ) : null}
      </Box>
    </Stack>
  );
};

export default Post;
