import { Container } from "@chakra-ui/react";
import React from "react";
import Header from "@/components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container centerContent w="100%" bg="brand.white" py={5}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
