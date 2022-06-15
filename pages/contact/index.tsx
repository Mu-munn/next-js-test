import { NextPage, InferGetStaticPropsType } from 'next';
import { Box, Center, Flex, Heading, Tag, VStack, Text, HStack, Divider, Link, TabList, Avatar, Table, TabPanel, TabPanels, Tabs, Tbody, Td, Th, Thead, Tr, Icon } from '@chakra-ui/react';
import { getAllPosts } from '../../utils/api';
import AppBar from '../../components/appBar';
import FloatingActrionButton from '../../components/floatingActionButton';
import { nodeGroup } from 'framer-motion/types/projection/node/group';
import { FaGithub, FaTwitter, FaFacebook, FaFax, FaBell, FaExternalLinkAlt, FaEnvelope } from "react-icons/fa"


type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
    const allPosts = getAllPosts(['slug', 'title', 'date', 'tags', 'dis_short']);

    return {
        props: { allPosts },
    };
};

const Contact = () => (
    <Box bg="gray.100" w="full" h="100vh" >
        <FloatingActrionButton />
        <AppBar />
        <VStack>
            <Center h="250px" w="100%" bg="">
                <Heading textAlign="center">CONTACT</Heading>
            </Center>
            <Center>
                <VStack spacing="30px" bg="white" w="70%" h="" top="300px" position="absolute" boxShadow='xl' p='9' rounded='md' >
                    {/* <Box h="50px"></Box>
                    <Heading textAlign="center">ご質問等、お気軽にお声掛け下さい！<br />TwitterのDMでも問題ありません！</Heading>
                    <Box h="50px"></Box> */}
                    <HStack>
                        <Icon as={FaEnvelope}>

                        </Icon>
                        <Text>
                            rpgmukai333@gmail.com
                        </Text>
                    </HStack>

                </VStack>
            </Center>
        </VStack>

    </Box>

);

export default Contact;