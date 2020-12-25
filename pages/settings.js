import Layout from "@/layout";
import { SettingsIcon } from "@chakra-ui/icons";
import { Flex, Heading, Divider, Stack, Input } from "@chakra-ui/react";
import Head from "next/head";

export default function Settings() {
  return (
    <Layout>
      <Head>
        <title>Settings</title>
      </Head>

      <Flex align="center" w="100%" textAlign="left">
        <SettingsIcon size="lg" w={6} h={6} mr={2} />{" "}
        <Heading>Settings</Heading>
      </Flex>

      <Divider my={5} />

      <Stack w="100%"></Stack>
    </Layout>
  );
}
