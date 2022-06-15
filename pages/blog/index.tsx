import { NextPage, InferGetStaticPropsType } from "next"
import {
  Box,
  Center,
  Flex,
  Heading,
  Tag,
  VStack,
  Text,
  HStack,
  Divider,
  Link,
} from "@chakra-ui/react"
import { getAllPosts } from "../../utils/api"
import AppBar from "../../components/appBar"
import FloatingActrionButton from "../../components/floatingActionButton"
import { nodeGroup } from "framer-motion/types/projection/node/group"

// type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags", "dis_short"])

  return {
    props: { allPosts },
  }
}

const blogPage = ({}) => (
  <Box>
    <Box bg='gray.100' w='full' h='2000px'>
      <FloatingActrionButton />
      <AppBar />
      <Box>
        <Heading fontSize={"100px"} m='6'>
          TECH-BLOG
        </Heading>
        <Heading fontSize={"30px"} m='6'>
          日々のアウトプット
        </Heading>
        <Center h='250px' w='100%'></Center>
      </Box>
    </Box>
  </Box>
)

export default blogPage
