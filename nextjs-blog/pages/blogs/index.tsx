import { NextPage, InferGetStaticPropsType } from 'next';
import { Box, Center, Flex, Heading, Tag, VStack, Text, HStack, Divider } from '@chakra-ui/react';
import { getAllPosts } from '../../utils/api';
import AppBar from '../../components/appBar';
import FloatingActrionButton from '../../components/floatingActionButton';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
    const allPosts = getAllPosts(['slug', 'title', 'date', 'tags', 'dis_short']);

    return {
        props: { allPosts },
    };
};

const Home: NextPage<Props> = ({ allPosts }) => (
    <Box>
        <Box Box bg="gray.100" w="full" h="1000vh" >
            <FloatingActrionButton />
            <AppBar />
            <Center h="250px" w="100%" bg="">
                <Heading textAlign="center">WORKS</Heading>
            </Center>
            <Center w="100%" bg=""  >
                <Box w="80%">
                    <Flex justifyContent="space-around" wrap="wrap">
                        {allPosts?.map((post) => (
                            <Box key={post.slug} mt={10} mr="20px" bg="white" w="300px" h="300px" boxShadow='xl' p='9' rounded='md' >
                                <VStack>
                                    <Box h="50px" bg="">
                                        <Heading size="md" >{post.title}</Heading>
                                    </Box>
                                    <Divider />
                                    {/* <Text>{post.date}</Text> */}
                                    <Flex>
                                        {post.tags?.map((tag) => (
                                            <Tag key={tag} mr="5px">{tag}</Tag>
                                            // <li key={tag}>{tag}</li>
                                        ))}
                                    </Flex>
                                    <Text>
                                        {post.dis_short}
                                    </Text>
                                </VStack>
                            </Box>
                        ))}
                    </Flex>
                </Box>

            </Center>
        </Box>

    </Box>

    //     <Box>
    //     {allPosts?.map((post) => (
    //       <Box key={post.slug} mt={10}bg="white" w="400px" h="400px" boxShadow='xl' p='9' rounded='md' >
    //         <VStack>
    //           <h2>{post.title}</h2>
    //           <p>{post.date}</p>
    //           <ul>
    //             {post.tags?.map((tag) => (
    //               <li key={tag}>{tag}</li>
    //             ))}
    //           </ul>
    //         </VStack>
    //       </Box>
    //     ))}
    //   </Box>

);

export default Home;