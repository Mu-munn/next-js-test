import {
  Flex,
  Text,
  Stack,
  Divider,
  Box,
  Image,
  Center,
} from "@chakra-ui/react";

export default function Row1() {
  return (
    // <Flex direction="row">
    //   <Flex direction="column">
    //     <Text>探す</Text>
    //     <Text>地元にどんな会社や仕事があるのかを探してみよう！</Text>
    //   </Flex>
    // </Flex>
    <Flex direction="row" h="400px" p={4}>
      <Box w="33%" alignItems="center" bg="" p="1%">
        <Text textAlign="center" fontSize="2xl" fontWeight="bold">
          探す
        </Text>
        <Text fontSize="xs" textAlign="center" >地元にどんな会社や仕事があるのかを探してみよう!</Text>
        <Center>
          <Image
            src="https://www.corpbook.jp/_next/image?url=%2Fimages%2Flp-img-1.png&w=3840&q=75"
            boxSize="300px"
          ></Image>
        </Center>
      </Box>
      <Divider orientation="vertical" />
      <Box w="33%" alignItems="center" bg="" p="1%">
        <Text textAlign="center" fontSize="2xl" fontWeight="bold">
          探す
        </Text>
        <Text fontSize="xs" textAlign="center" >地元にどんな会社や仕事があるのかを探してみよう!</Text>
        <Center>
          <Image
            src="https://www.corpbook.jp/_next/image?url=%2Fimages%2Flp-img-2.png&w=3840&q=75"
            boxSize="300px"
          ></Image>
        </Center>
      </Box>
      <Divider orientation="vertical" />
      <Box w="33%" alignItems="center" bg="" p="1%">
        <Text textAlign="center" fontSize="2xl" fontWeight="bold">
          探す
        </Text>
        <Text fontSize="xs" textAlign="center" >地元にどんな会社や仕事があるのかを探してみよう!</Text>
        <Center>
          <Image
            src="https://www.corpbook.jp/_next/image?url=%2Fimages%2Flp-img-3.png&w=3840&q=75"
            boxSize="300px"
          ></Image>
        </Center>
      </Box>
    </Flex>
  );
}
