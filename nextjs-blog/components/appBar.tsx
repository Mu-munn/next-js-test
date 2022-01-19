import { Box, Button, Center, Divider, Flex, Heading, Spacer, Stack, Image, IconButton, VStack, HStack, Icon, Circle, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import router from 'next/router'
import { FaGithub, FaTwitter, FaFacebook, FaFax, FaBell, FaExternalLinkAlt } from "react-icons/fa"
import { MdBuild } from 'react-icons/md'

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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const pageTitle = title || 'ホームページタイトル'
    return (
        <Box position="sticky" top="0" zIndex="sticky" bg="white" w="100%" h="60px" boxShadow="xl">
            <Flex direction="row" color="#38555a" align="center">
                <Box ml="" w="" bg="" p={2}>
                    {/* <Heading size="lg">MUKAIGAWARA</Heading> */}
                    <Image src="./images/logo.png" boxSize="40px" objectFit="contain"></Image>
                </Box>
                <Button
                    // onClick={onOpen}
                    // leftIcon={<FaExternalLinkAlt />}
                    colorScheme='teal'
                    variant='solid'
                    left="1px"
                    top="1px">
                    現在、Flutter・NextJSでのインターンを探しております！！

                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>現在、Flutter・NextJSでのお仕事を探しております！！</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                             {/* <Lorem count={2} /> */}
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant='ghost'>Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                <Spacer></Spacer>
                <Box p={2}>
                    <Stack direction='row' spacing={4}>
                        <HStack spacing='1px'>
                            <Button colorScheme='teal' variant='ghost'
                            onClick={() => router.push("/")}>
                                ABOUTME
                            </Button>
                            <Button colorScheme='teal' variant='ghost'
                            onClick={() => router.push("/blogs")}
                            >
                                WORKS
                            </Button>
                            {/* <IconButton
                                boxShadow='xl'
                                rounded='md'
                                variant='outline'
                                colorScheme='teal'
                                aria-label='Call Sage'
                                fontSize='20px'
                                icon={<FaGithub />}
                                onClick={
                                    handleClick
                                }
                            />

                            <IconButton
                                boxShadow='xl'
                                rounded='md'
                                variant='outline'
                                colorScheme='teal'
                                aria-label='Call Sage'
                                fontSize='20px'
                                icon={<FaTwitter />}
                            /> */}

                        </HStack>

                        <Button
                            rightIcon={<FaFax />}
                            colorScheme='teal'
                        //variant='outline'
                        >
                            ご連絡
                        </Button>
                    </Stack>
                </Box>
            </Flex>

        </Box>
    )
}