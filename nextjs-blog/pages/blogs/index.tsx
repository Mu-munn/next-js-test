import { NextPage, InferGetStaticPropsType } from 'next';
import { Box, Center, Flex, Heading, VStack } from '@chakra-ui/react';
import { getAllPosts } from '../../utils/api';
import AppBar from '../../components/appBar';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
    const allPosts = getAllPosts(['slug', 'title', 'date', 'tags']);

    return {
        props: { allPosts },
    };
};

const Home: NextPage<Props> = ({ allPosts }) => (
    <Box>
        <Box Box bg="gray.100" w="full" h="1000vh" >
            <AppBar />
            <Center w="100%" bg="" mt="10%" >
                <Box w="80%">
                    <Flex justifyContent="space-around" wrap="wrap">
                        {allPosts?.map((post) => (
                            <Box key={post.slug} mt={10} mr="20px" bg="white" w="300px" h="300px" boxShadow='xl' p='9' rounded='md' >
                                <VStack>
                                    <h2>{post.title}</h2>
                                    <p>{post.date}</p>
                                    <ul>
                                        {post.tags?.map((tag) => (
                                            <li key={tag}>{tag}</li>
                                        ))}
                                    </ul>
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