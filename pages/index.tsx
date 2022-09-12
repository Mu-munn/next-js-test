import { NextPage, InferGetStaticPropsType } from "next"
import {
  Box,
  Center,
  Heading,
  VStack,
  Text,
  Tab,
  TabList,
  TabPanel,
  Button,
  TabPanels,
  Tabs,
  Avatar,
  Divider,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Spacer,
  HStack,
  Stack,
  Flex,
} from "@chakra-ui/react"
import { getAllPosts } from "../utils/api"
import AppBar from "../components/appBar"
import FloatingActrionButton from "../components/floatingActionButton"

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags", "dis_short"])

  return {
    props: { allPosts },
  }
}

const BlogPage = () => (
  <Center h={"100vh"}>
    <Button></Button>
  </Center>
)

export default BlogPage
