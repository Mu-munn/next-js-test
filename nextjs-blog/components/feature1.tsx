import { Box, Button, Center, Heading, HStack, Icon, IconButton, VStack } from "@chakra-ui/react";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { MdPhone } from "react-icons/md";
import SnsLinks from "./snsLinks";

export default function Feature1() {
    return (
        <VStack h="100vh" bg="#38555a" w="100%">
            <VStack bg="white" h="100%" w="60%" position="relative">
                <Box position="absolute" right="5%" bottom="5%">
                    {/* <IconButton
                        boxShadow='xl' rounded='md' bg='white'
                        variant='outline'
                        colorScheme='teal'
                        aria-label='Call Sage'
                        fontSize='20px'
                        icon={<MdPhone />}
                    /> */}
                    <SnsLinks/>
                </Box>

                <VStack color="#38555a" spacing="30px">
                    <Box textAlign="center" my="30%" boxShadow='xl' p='9' rounded='md' bg='white' w="400px">
                        <Heading >MUKAIGAWARA</Heading>
                        <Heading >YUUKI.</Heading>
                    </Box>
                    <Button colorScheme='teal' variant='outline' h="85px" w="370px" boxShadow='xl' p='6' rounded='md' bg='white' >
                        向川原 悠貴　について
                    </Button>
                    <Button colorScheme='teal' variant='outline' h="85px" w="370px" boxShadow='xl' p='6' rounded='md' bg='white' >
                        過去の作品を見てみる
                    </Button>
                    {/* <Button colorScheme='teal' variant='outline' h="85px" w="370px" boxShadow='xl' p='6' rounded='md' bg='white' my="3%">
                        お問い合わせ
                    </Button> */}
                    {/* <Button colorScheme='teal' variant='outline' h="85px" w="400px" boxShadow='xl' p='6' rounded='md' bg='white'>
                        向川原 悠貴　について
                    </Button> */}
                </VStack>

                {/* <Button></Button> */}
            </VStack>


        </VStack>
        // #c8a6a0 : #38555a
        //#494949 : #ea7530

    )
}