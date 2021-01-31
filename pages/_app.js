import { ChakraProvider } from "@chakra-ui/react";
import AuthProvider from "contexts/AuthContext";
import { Router } from "next/router";
import theme from "theme";

Router.events.on("routeChangeStart", () => {
  console.log("Start");
});

Router.events.on("routeChangeComplete", () => {
  console.log("Complete");
});

Router.events.on("routeChangeError", () => {
  console.log("Error");
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
