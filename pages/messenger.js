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

      <Flex align="center" w="100%" textAlign="left">
        <ChatIcon w={5} h={5} mr={2} />{" "}
        <Heading fontSize="xl">Messenger</Heading>
      </Flex>

      <Divider my={5} />

      {!toggleChat && (
        <Input
          mb={3}
          placeholder="Search..."
          onFocus={() => setToggleSearch(true)}
          onBlur={() => setToggleSearch(false)}
          disabled={toggleChat}
        />
      )}

      {!toggleSearch ? (
        <Stack w="100%" spacing={1}>
          {toggleChat ? (
            <Chat setToggleChat={() => setToggleChat(!toggleChat)} />
          ) : (
            <Message setToggleChat={setToggleChat} />
          )}
        </Stack>
      ) : null}
    </Layout>
  );
}
