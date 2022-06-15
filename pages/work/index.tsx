import { NextPage, InferGetStaticPropsType } from 'next';
import { Box, Center, Flex, Heading, Tag, VStack, Text, HStack, Divider, Link } from '@chakra-ui/react';
import { getAllPosts } from '../../utils/api';
import AppBar from '../../components/appBar';
import FloatingActrionButton from '../../components/floatingActionButton';
import { nodeGroup } from 'framer-motion/types/projection/node/group';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
    const allPosts = getAllPosts(['slug', 'title', 'date', 'tags', 'dis_short']);

    return {
        props: { allPosts },
    };
};

const Home: NextPage<Props> = ({ allPosts }) => (
    <Box>
        <Box Box bg="gray.100" w="full" h="200vh" >
            <FloatingActrionButton />
            <AppBar />
            <Center h="250px" w="100%" bg="">
                <Heading textAlign="center">WORKS</Heading>
            </Center>
            <Center w="100%" bg=""  >
                <Box w="80%">
                    <Flex justifyContent="space-around" wrap="wrap">
                        {allPosts?.map((post) => (
                            <Link href={`/docs/${post.slug}`}>
                                <Box
                                    key={post.slug}
                                    mt="20px"
                                    mr=""
                                    gap="20px"
                                    bg="white"
                                    w="300px"
                                    h="300px"
                                    boxShadow='xl'
                                    p='9'
                                    rounded='md'
                                    _hover={{
                                        color: "#4B0082",
                                        opacity: 0.7,
                    
                                    }} >
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
                            </Link>
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