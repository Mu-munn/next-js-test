import "../styles/global.css"
import "focus-visible/dist/focus-visible"

import { ChakraProvider,extendTheme} from "@chakra-ui/react"
import Head from "next/head"

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap" rel="stylesheet"></link>
      </Head>
      <ChakraProvider
       theme={extendTheme({
        fonts: {
          heading: "'Noto Sans JP', sans-serif;",
          body: "'Noto Sans JP', sans-serif;",
        },
      })}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
