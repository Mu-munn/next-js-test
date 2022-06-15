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

type Props = InferGetStaticPropsType<typeof getStaticProps>

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags", "dis_short"])

  return {
    props: { allPosts },
  }
}
const fontSizePri = "30px"

const BlogPage = () => (
  <Box>
    <Box bg='gray.100' w='full'>
      <FloatingActrionButton />
      <AppBar />
      <Box>
        <Heading fontSize={"100px"} m='6'>
          MUKAIGAWARA_YUUKI
        </Heading>
        <Heading fontSize={"30px"} m='6'>
          Welcome to my portfolio.
        </Heading>
        {/* contents area */}
        <Spacer h={"100px"}></Spacer>
        {/* <Center h='2000px' w='80%' bgColor={"#0B2B40"} m="0 auto"> */}
        <Box  w='100%' bgColor={"#0B2B40"} m='0 auto'>
          <Spacer h={"100px"}></Spacer>
          <Box w={"80%"} h={""} m='0 auto' color={"white"}>
            <Heading>Profile</Heading>
            <Spacer h={"10px"}></Spacer>
            <Stack ml={4} p='2' fontSize={fontSizePri} >
              <Text>・向川原 悠貴　　</Text>
              <Text>・専門学生　24年度卒業予定</Text>
            </Stack>
            {/* <Spacer h={"100px"}></Spacer>
            <Box w={"80%"} h={"500px"} m='0 auto' color={"white"} bgColor="gray.100"></Box> */}
          </Box>
          <Spacer h={"100px"}></Spacer>
          <Box w={"80%"} h={""} m='0 auto' color={"white"}>
            <Heading>Career</Heading>
            <Spacer h={"10px"}></Spacer>
            <Stack ml={4} p='2' fontSize={fontSizePri} >
              <Text>・可茂IT塾(インターン) 2021/10~現在</Text>
              <Text>Flutter・Next.js等を使いモバイルアプリ、Webアプリの開発に参加</Text>
            </Stack>
            {/* <Spacer h={"100px"}></Spacer>
            <Box w={"80%"} h={"500px"} m='0 auto' color={"white"} bgColor="gray.100"></Box> */}
          </Box>
          <Spacer h={"200px"}></Spacer>
          <Box w={"80%"} h={""} m='0 auto' color={"white"}>
            {/* <Heading>モットー</Heading> */}
            <Spacer h={"10px"}></Spacer>
            <Stack ml={4} p='2' fontSize={fontSizePri} >
              <Text fontWeight={"bold"}>「チームを大切にできるエンジニアになる」</Text>
              <Spacer h={"10px"}></Spacer>
              <Box p={8} bgColor='gray.100' borderRadius={"lg"}>
                <Flex color='#343434' fontSize={"20px"} wrap={"wrap"} >
                  <Text>
                    私は主にReact,Flutterを使った開発を行うインターンに７ヶ月ほど前から参加させて頂いております。
                  </Text>
                  <Text> 最近になり、インターンの活動中に少し気付いたことがあります。 </Text>
                  <Text>それは「チームの一員として動くことの大切さ」です。</Text>
                  <Text>エンジニアを目指す学生として、技術はもちろん磨いていきます。</Text>
                  <Text>しかしそれ以上に、チームの一員としてコミュニケーションを取ったり、</Text>
                  <Text>
                    進捗・課題等を報告したり、「スムーズにプロジェクトを進められること」が何よりも大事だと思います。
                  </Text>
                  <Text>技術は、そのように円滑に進めるために磨いていくものだと思います。</Text>
                  <Text>
                    私はそのような「人として頼れて、チームを大切にできるエンジニア」を目指しています。
                  </Text>
                </Flex>
                <Text></Text>
              </Box>
            </Stack>
            {/* <Spacer h={"100px"}></Spacer>
            <Box w={"80%"} h={"500px"} m='0 auto' color={"white"} bgColor="gray.100"></Box> */}
          </Box>
          <Spacer h={"100px"}></Spacer>
        </Box>
        
      </Box>
      
    </Box>
  </Box>
)

export default BlogPage
