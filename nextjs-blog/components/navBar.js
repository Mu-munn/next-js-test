import { Flex, Heading, Box, Spacer, Button, Center, Divider } from "@chakra-ui/react";

export default function SideNav() {
  return (
    <Box position="sticky" top="0" zIndex="sticky" bgColor="white">
      <Flex h="70px" bg="" color="">
        <Box p="20px" ml={20}>
          <Heading size="md">偽CORPBOOK</Heading>
        </Box>
        <Spacer />
        <Flex>
          <Center>
            <Heading size="xm" mr="4">
              ログイン
            </Heading>
          </Center>
          <Center mr={20}>
            <Button colorScheme='blue' 
            width="130px"
            borderRadius={50}
            >無料会員登録</Button>
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
