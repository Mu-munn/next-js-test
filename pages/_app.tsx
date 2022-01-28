import '../styles/global.css'
import 'focus-visible/dist/focus-visible'; 


import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App