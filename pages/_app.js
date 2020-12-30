import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import AuthProvider from "@/contexts/AuthContext";

const theme = extendTheme({
  colors: {
    brand: {
      white: "#fafafa",
      darkGrey: "#171717",
    },
  },
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
