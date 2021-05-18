import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import * as React from 'react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component />
        </ChakraProvider>
    )
}
