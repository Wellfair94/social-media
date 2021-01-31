import Chat from "components/Chat";
import Message from "components/Message";
import Layout from "layout";
import { ChatIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Divider,
  Stack,
  Avatar,
  Text,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

export default function Messenger() {
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleChat, setToggleChat] = useState(false);

  return (
    <Layout>
      <Head>
        <title>Messenger</title>
      </Head>

      <Flex align="center" w="100%" h="100%" textAlign="left">
        <ChatIcon w={5} h={5} mr={2} />{" "}
        <Heading fontSize="xl">Messenger</Heading>
      </Flex>

      <Divider my={5} />

      <Input
        mb={3}
        placeholder="Search..."
        onFocus={() => setToggleSearch(true)}
        onBlur={() => setToggleSearch(false)}
        disabled={toggleChat}
      />

      <Flex w="100%" grow={1} boxShadow="md" borderRadius="md" p={2}>
        {!toggleSearch ? (
          <Flex w="100%" grow={1}>
            <Stack w="100%" spacing={1} height="100%">
              {toggleChat ? (
                <Flex grow={1}>
                  <Chat setToggleChat={() => setToggleChat(!toggleChat)} />
                </Flex>
              ) : (
                <Stack spacing={1}>
                  <Message setToggleChat={setToggleChat} />
                  <Message setToggleChat={setToggleChat} />
                  <Message setToggleChat={setToggleChat} />
                </Stack>
              )}
            </Stack>
          </Flex>
        ) : null}
      </Flex>
    </Layout>
  );
}
