import {
  Flex,
  Heading,
  Box,
  Spacer,
  Button,
  Center,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";

export default function SideNav() {
  return (
    <Box position="sticky" top="0" zIndex="sticky" bgColor="white">
      <Flex h="70px" bg="" color="" alignItems="center">
        <Box pl="3%">
          <Heading size="md">偽CORPBOOK</Heading>
        </Box>
        <Spacer />
        <Flex>
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
      <Divider />
    </Box>

    // <Flex p="2">
    //   <Box p="4" bg="red.400">
    //     Box 1
    //   </Box>
    //   <Spacer />
    //   <Box p="4" bg="green.400">
    //     Box 2
    //   </Box>
    // </Flex>
  );
}
