import {
  Flex,
  Heading,
  Box,
  Spacer,
  Button,
  Center,
  VStack,
} from "@chakra-ui/react";

export default function Box1() {
  return (
    <Flex w="100%" h={300} align="center" bg="" textAlign="center">
      <Spacer />
      <VStack w="80%">
        <Heading fontSize={["20px", "36px", "46px" ]}>地元の企業と繋がれる</Heading>
        <Heading size="sm" color="gray">
          CORPBOOKとは、気になる会社を登録しておくだけで、その会社の見学イベントや求人情報などの案内が届くサービスです
        </Heading>
      </VStack>
      <Spacer />
    </Flex>
  );
}
