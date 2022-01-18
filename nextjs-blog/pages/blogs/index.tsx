import { NextPage, InferGetStaticPropsType } from 'next';
import { Box, Center, Heading, VStack, Text, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { getAllPosts } from '../../utils/api';
import AppBar from '../../components/appBar';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags']);

  return {
    props: { allPosts },
  };
};


const BlogPage: NextPage<Props> = ({ allPosts }) => (
  // <ul>
  //   {allPosts?.map((post) => (
  //     <Box key={post.slug} mt={10}>
  //       <li>
  //         <h2>{post.title}</h2>
  //         <p>{post.date}</p>
  //         <ul>
  //           {post.tags?.map((tag) => (
  //             <li key={tag}>{tag}</li>
  //           ))}
  //         </ul>
  //       </li>
  //     </Box>
  //   ))}
  // </ul>
  <Box bg="gray.100" w="full" h="1000vh" >
    <AppBar />
    <VStack>
      <Center h="250px" w="100%" bg="">
        <Heading>ABOUT ME</Heading>
      </Center>
      <Center>
        <VStack spacing="30px" bg="white" w="70%" h="500px" top="300px" position="absolute" boxShadow='xl' p='9' rounded='md' >
          <Tabs variant='enclosed' w="100%">
            <TabList>
              <Tab>自己紹介</Tab>
              <Tab>モットー</Tab>
              <Tab>インターンにて</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Heading textAlign="center">初めまして、向川原です。</Heading>
                <Text>大学を目指して浪人していましたが、好きなことを目指そうと考え、現在は名古屋工学院専門学校 情報総合学科四年制(現在は第二学年)でお世話になっています。
                  とにかくシステム・アプリを開発することが好きです！フロントもバックエンドもモバイルも！開発に関わることならなんでも好きです！！
                </Text>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          {/* <Heading textAlign="center">初めまして、向川原です。</Heading>
          <Text>大学を目指して浪人していましたが、好きなことを目指そうと考え、現在は名古屋工学院専門学校 情報総合学科四年制(現在は第二学年)でお世話になっています。
            とにかくシステム・アプリを開発することが好きです！フロントもバックエンドもモバイルも！開発に関わることならなんでも好きです！！
          </Text> */}


        </VStack>
      </Center>
    </VStack>

  </Box>
);

export default BlogPage;