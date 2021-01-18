import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <Box w="100%" minH="100vh" bg="brand.white">
      <Header isLoggedIn={false} />
      <Container centerContent w="100%" minH="100%" py={5}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
