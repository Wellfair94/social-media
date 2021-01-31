import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "components/Header";

const Layout = ({ children }) => {
  return (
    <Flex
      align="center"
      direction="column"
      w="100%"
      minH="100vh"
      bg="brand.white"
    >
      <Header isLoggedIn={false} />
      <Container
        centerContent
        w="100%"
        minH="calc(100vh - 60px)"
        py={5}
        display="flex"
      >
        <Flex direction="column" w="100%" grow={1}>
          {children}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Layout;
