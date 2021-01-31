import Layout from "layout";
import { SettingsIcon } from "@chakra-ui/icons";
import { Flex, Heading, Divider, Stack } from "@chakra-ui/react";
import Head from "next/head";

export default function Settings() {
  return (
    <Layout>
      <Head>
        <title>Settings</title>
      </Head>

      <Flex align="center" w="100%" textAlign="left">
        <SettingsIcon w={5} h={5} mr={2} />{" "}
        <Heading fontSize="xl">Settings</Heading>
      </Flex>

      <Divider my={5} />

      <Stack w="100%"></Stack>
    </Layout>
  );
}
