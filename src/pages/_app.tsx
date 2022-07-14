import { ChakraProvider } from '@chakra-ui/react'
import theme from '../../theme';
import whiteList from '../../Whitelist.json';
import { ParseStart } from '../services/parse.tsx';

function MyApp({ Component, pageProps }) {

  ParseStart(); //connects to parse database

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
