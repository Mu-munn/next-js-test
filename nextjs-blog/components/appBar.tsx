import { Box, Button, Center, Divider, Flex, Heading, Spacer } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
    children?: React.ReactNode
    title?: string
    description?: string
}

export default function AppBar({ children, title, description }: Props) {
    const pageTitle = title || 'ホームページタイトル'
    return (
        <Box position="sticky" top="0" zIndex="sticky" bgColor="">
            <Flex h="70px" bg="" color="" alignItems="center">
                <Box pl="3%">
                    <Heading size="md" color="white">偽CORPBOOK</Heading>
                </Box>
                <Spacer />
                <Flex mr="20px">
                    <Center>
                        <Heading size="xm" mr="4">
                            ログイン
                        </Heading>
                    </Center>
                    <Center pr="1px">
                        <Button colorScheme="blue" size="sm" borderRadius={50}>
                            <Link href="/pages/posts/first-post.tsx">
                                遷移
                            </Link>
                        </Button>
                    </Center>

                    {/* <Heading size="xm" mr={20}>無料会員登録</Heading> */}
                </Flex>
            </Flex>
            {/* <Divider /> */}
        </Box>
    )
}