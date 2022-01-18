import { NextPage, InferGetStaticPropsType } from 'next';
import { Box, Center, Heading, VStack, Text, Tab, TabList, TabPanel, TabPanels, Tabs, Avatar } from '@chakra-ui/react';
import { getAllPosts } from '../../utils/api';
import AppBar from '../../components/appBar';
import FloatingActrionButton from '../../components/floatingActionButton';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags']);

  return {
    props: { allPosts },
  };
};


const BlogPage: NextPage<Props> = ({ allPosts }) => (

  <Box bg="gray.100" w="full" h="1000vh" >
    <FloatingActrionButton />
    <AppBar />
    <VStack>
      <Center h="250px" w="100%" bg="">
        <Heading textAlign="center">初めまして、向川原　悠貴です。</Heading>
      </Center>
      <Center>
        <VStack spacing="30px" bg="white" w="70%" h="" top="300px" position="absolute" boxShadow='xl' p='9' rounded='md' >
          <Tabs variant='enclosed' w="100%">
            <TabList>
              <Tab>自己紹介</Tab>
              <Tab>スキル</Tab>
              <Tab>インターンにて</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Center w="100%" h="200px">
                  <Avatar size='2xl' name='Segun Adebayo' src='./images/profile.jpg'></Avatar>
                </Center>

                <Heading textAlign="center">ABOUT ME</Heading>
                <Box h="50px"></Box>
                <Text>大学を目指して浪人中、Webサイト制作にハマる。それを機に専門学校へ進学。
                  そして、現在はインターン先にてFlutterによるアプリ開発、Next.jsによるWeb開発をさせて頂いております。



                  とにかくシステム・アプリを開発することが好きです！フロントもバックエンドもモバイルも！開発に関わることならなんでも好きです！！
                </Text>

                <Box h="100px"></Box>
                <Text>休日や空いた時間には、個人アプリの開発やWebアプリ開発をしたり、qiitaやzennなどの記事を書いたり、ギターを弾いたりしています。</Text>

              </TabPanel>

              <TabPanel>
              <Heading textAlign="center">Flutter</Heading>
                <Text>Flutterは、一年ほど触っており、一番好きなフレームワークでもあります。</Text>
              </TabPanel>

              <TabPanel>
                <Text>将来は、Webやモバイルなど、く対応できる人材になりたいと考えております。</Text>
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