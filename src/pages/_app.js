import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

const Manos = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default Manos;
