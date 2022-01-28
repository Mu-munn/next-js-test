import { NextPage, InferGetStaticPropsType } from 'next';
import { Box, Center, Heading, VStack, Text, Tab, TabList, TabPanel, TabPanels, Tabs, Avatar, Divider, Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { getAllPosts } from '../utils/api';
import AppBar from '../components/appBar';
import FloatingActrionButton from '../components/floatingActionButton';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags','dis_short']);

  return {
    props: { allPosts },
  };
};


const BlogPage: NextPage<Props> = ({ allPosts }) => (

  <Box bg="gray.100" w="full" h="350vh" >
    <FloatingActrionButton />
    <AppBar />
    <VStack>
      <Center h="250px" w="100%" bg="">
        <Heading textAlign="center">ABOUT ME</Heading>
      </Center>
      <Center>
        <VStack spacing="30px" bg="white" w="70%" h="" top="300px" position="absolute" boxShadow='xl' p='9' rounded='md' >
          <Tabs variant='enclosed' w="100%">
            <TabList>
              {/* <Tab>自己紹介</Tab> */}
              {/* <Tab>スキル</Tab> */}
              {/* <Tab>インターンにて</Tab> */}
            </TabList>
            <TabPanels>
              <TabPanel>
                <Center w="100%" h="200px">
                  <Avatar size='2xl' name='Segun Adebayo' src='./images/profile.jpg'></Avatar>
                </Center>

                <Heading textAlign="center">初めまして、向川原 悠貴です。</Heading>
                <Box h="50px"></Box>
                <Text>大学を目指して浪人中、Webサイト制作にハマる。それを機に専門学校へ進学。
                  現在はインターン先にてFlutterによるアプリ開発や、Next.jsによるWeb開発をさせて頂いております！！

                </Text>
                <Text>

                </Text>
                <Box h="30px"></Box>
                <Text>
                  とにかくシステム・アプリを開発することが好きです！フロントもバックエンドもモバイルも！開発に関わることならなんでも好きです！！あと、どちらかというとモダンな
                  言語やフレームワークが好きです！
                  最近だと、React・Nextjsが楽しくてやめれません。
                </Text>

                <Box h="50px"></Box>
                <Text>休日や空いた時間には、個人アプリの開発やWebアプリ開発をしたり、qiitaやzennなどの記事を読んだり（たまに書いたり・・・）、ギターを弾いたりしています〜！</Text>

                <Box h="50px"></Box>
                <Text>あと、好きなラーメン屋はうまやです。</Text>

                <Box h="50px"></Box>
                <Heading textAlign="center">Flutter</Heading>
                <Divider></Divider>
                <Box h="50px"></Box>

                <Text>Flutterは、独学とインターン先にて触っており、僕が一番好きなフレームワークでもあります。
                  状態管理にRiverpod、StateNotifier、Freezedを使うことが多いです。またMVCモデルでほとんど作っています。
                </Text>
                <Box h="30px"></Box>
                <Text>もともと一年ほど独学でFlutterをしていたのですが、スキルアップのために参加したインターンにて、
                  自分のできなさを思い知り、日々奮闘中です・・・。
                </Text>
                <Box h="30px"></Box>
                <Text>また、学内でFlutterによるアプリ開発チームを立ち上げ、勉強会やアプリ開発の企画、運営をさせていただいております。
                  このチームでは、主に先生用の業務ツールアプリなどを作ることから始め、色々なアプリも手掛けるようになってきております！
                </Text>

                <Box h="50px"></Box>
                <Heading textAlign="center">React・Nextjs</Heading>
                <Divider></Divider>
                <Box h="50px"></Box>

                <Text>もともとNode.js(Express)が好きで、jsを独学していたのがきっかけで始めました！こちらも、独学一年＋インターン先にて少し触らせてもらっています。
                  今一番ハマっており、毎日寝る寸前までやっています・・・

                </Text>
                <Box h="30px"></Box>
                <Text>最近だと、UIコンポーネントにChakraUIを使うのがマイブームです！笑このポートフォリオサイトも、Next.js(ts)とChakraUIによって作られております。
                  詳細は、ぜひWORKSの成果物よりご覧ください！
                </Text>


                <Box h="50px"></Box>
                <Heading textAlign="center">その他得意なもの</Heading>
                {/* <Divider></Divider> */}
                <Box h="50px"></Box>

                <Table variant='simple'>
                  {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                  <Thead>
                    <Tr>
                      <Th> スキル</Th>
                      <Th>概要</Th>
                      {/* <Th isNumeric>multiply by</Th> */}
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Git・GitHub</Td>
                      <Td>インターンでも使用していましたので、基本操作は大丈夫かと思います。</Td>
                      {/* <Td isNumeric>25.4</Td> */}
                    </Tr>
                    <Tr>
                      <Td>FireBase</Td>
                      <Td>こちらもインターンの開発したアプリにて使っておりました。また個人制作でも使用します。</Td>
                      {/* <Td isNumeric>30.48</Td> */}
                    </Tr>
                    <Tr>
                      <Td>Html・Css</Td>
                      <Td>基本的なコーディングはできます。</Td>
                      {/* <Td isNumeric>0.91444</Td> */}
                    </Tr>
                    <Tr>
                      <Td>SQL</Td>
                      <Td>FireBaseを使うことの方が多いですが、SQLもたまに使います。</Td>
                      {/* <Td isNumeric>0.91444</Td> */}
                    </Tr>
                  </Tbody>
                  {/* <Tfoot>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Tfoot> */}
                </Table>

                <Box h="50px"></Box>
                <Heading textAlign="center">独学・授業で学んだこと</Heading>
                {/* <Divider></Divider> */}
                <Box h="50px"></Box>
                <Text textAlign="center">C・C#・Java・php・OracleDB・Linux・WordPress・Unity</Text>

              </TabPanel>

              <TabPanel>
                <Box h="50px"></Box>
                <Heading textAlign="center">Flutter</Heading>
                <Divider></Divider>
                <Box h="50px"></Box>

                <Text>Flutterは、独学で一年、インターン先にて三ヶ月ほど触っており、一番好きなフレームワークでもあります。
                  個人開発では、状態管理にRiverpod、StateNotifier、Freezedを使うことが多いです。またMVCモデルでほとんど作っています。
                </Text>
                <Box h="30px"></Box>
                <Text>もともと一年ほど独学でFlutterをしていたのですが、スキルアップのために参加したインターンにて、革命が起きました。インターンでの経験談は次のタブに記載しておりますので、
                  ぜひご覧ください！
                </Text>
                <Box h="30px"></Box>
                <Text>また、学内でFlutterによるアプリ開発チームを立ち上げ、勉強会やアプリ開発の企画、運営をさせていただいております。</Text>

                <Box h="50px"></Box>
                <Heading textAlign="center">React・Next.js</Heading>
                <Divider></Divider>
                <Box h="50px"></Box>

                <Text>もともとNode.js(Express)が好きで、jsを独学していたのがきっかけで始めました！こちらも、独学一年＋インターン先にて少し触らせてもらっています。
                  今一番ハマっており、毎日寝る寸前までやっています・・・

                </Text>
                <Box h="30px"></Box>
                <Text>最近だと、UIコンポーネントにChakraUIを使うのがマイブームです！笑このポートフォリオサイトも、Next.js(ts)とChakraUIによって作られております。
                  詳細は、ぜひWORKSの成果物よりご覧ください！
                </Text>


                <Box h="50px"></Box>
                <Heading textAlign="center">その他得意なもの</Heading>
                {/* <Divider></Divider> */}
                <Box h="50px"></Box>

                <Table variant='simple'>
                  {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                  <Thead>
                    <Tr>
                      <Th> スキル</Th>
                      <Th>概要</Th>
                      {/* <Th isNumeric>multiply by</Th> */}
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Git・GitHub</Td>
                      <Td>インターンでも使用していましたので、基本操作は大丈夫かと思います。</Td>
                      {/* <Td isNumeric>25.4</Td> */}
                    </Tr>
                    <Tr>
                      <Td>FireBase</Td>
                      <Td>こちらもインターンの開発したアプリにて使っておりました。また個人制作でも使用します。</Td>
                      {/* <Td isNumeric>30.48</Td> */}
                    </Tr>
                    <Tr>
                      <Td>Html・Css</Td>
                      <Td>基本的なコーディングはできます。</Td>
                      {/* <Td isNumeric>0.91444</Td> */}
                    </Tr>
                    <Tr>
                      <Td>SQL</Td>
                      <Td>FireBaseを使うことの方が多いですが、SQLもたまに使います。</Td>
                      {/* <Td isNumeric>0.91444</Td> */}
                    </Tr>
                  </Tbody>
                  {/* <Tfoot>
                    <Tr>
                      <Th>To convert</Th>
                      <Th>into</Th>
                      <Th isNumeric>multiply by</Th>
                    </Tr>
                  </Tfoot> */}
                </Table>

                <Box h="50px"></Box>
                <Heading textAlign="center">独学・授業で学んだこと</Heading>
                {/* <Divider></Divider> */}
                <Box h="50px"></Box>
                <Text textAlign="center">C・C#・Java・php・OracleDB・Linux・WordPress・Unity</Text>

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