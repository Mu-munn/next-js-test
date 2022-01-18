import { Box, Button, Center, Divider, Flex, Heading, Spacer, Stack, Image, IconButton, VStack, HStack } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import { FaGithub, FaTwitter, FaFacebook, FaFax } from "react-icons/fa"

type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}
const handleClick = (e) => {
    e.preventDefault()
    window.open('https://github.com/Mu-munn')
}
export default function AppBar({ children, title, description }: Props) {
    const pageTitle = title || 'ホームページタイトル'
    return (
        // <Box position="sticky" top="0" zIndex="sticky" bgColor="">
        //     <Flex h="70px" bg="" color="" alignItems="center">
        //         <Box pl="3%">
        //             <Heading size="md" color="white">MUKAIGAWARA</Heading>
        //         </Box>
        //         <Spacer />
        //         <Flex mr="20px">
        //             <Center>
        //                 <Heading size="xm" mr="4">
        //                     ログイン
        //                 </Heading>
        //             </Center>
        //             <Center pr="1px">
        //                 <Button colorScheme="blue" size="sm" borderRadius={50}>
        //                     <Link href="/pages/posts/first-post.tsx">
        //                         遷移
        //                     </Link>
        //                 </Button>
        //             </Center>

        //             {/* <Heading size="xm" mr={20}>無料会員登録</Heading> */}
        //         </Flex>
        //     </Flex>
        //     <Divider />
        // </Box>
        <Box position="sticky" top="0" zIndex="sticky" bg="white" w="100%" h="60px" boxShadow="xl">
            <Flex direction="row" color="#38555a">
                <Box ml="" w="25%" bg="" p={2}>
                    {/* <Heading size="lg">MUKAIGAWARA</Heading> */}
                    <Image src="./images/logo.png" boxSize="40px" objectFit="contain"></Image>
                </Box>
                <Spacer></Spacer>
                <Box p={2}>
                    <Stack direction='row' spacing={4}>
                        <HStack spacing='10px'>
                            <IconButton
                                //boxShadow='xl'
                                rounded='md'
                                // variant='solid'
                                colorScheme='teal'
                                aria-label='Call Sage'
                                fontSize='20px'
                                icon={<FaGithub />}
                                onClick={
                                    handleClick
                                }
                            />
                            <IconButton
                                // boxShadow='xl'
                                rounded='md'
                                //variant='outline'
                                colorScheme='teal'
                                aria-label='Call Sage'
                                fontSize='20px'
                                icon={<FaTwitter />}
                            />
                            <IconButton
                                //  boxShadow='xl'
                                rounded='md'
                                //variant='outline'
                                colorScheme='teal'
                                aria-label='Call Sage'
                                fontSize='20px'
                                icon={<FaFacebook />}
                            />
                            {/* <Button colorScheme='teal' variant='outline' boxShadow='xl' rounded='md' bg='white' h="44px">
                連絡する
            </Button> */}
                        </HStack>
                        {/* <Button leftIcon={<FaGithub />} colorScheme='teal' variant='solid'>
                            Email
                        </Button> */}
                        <Button rightIcon={<FaFax />} colorScheme='teal' variant='outline'>
                            ご連絡
                        </Button>

                    </Stack>
                </Box>
            </Flex>

        </Box>
    )
}