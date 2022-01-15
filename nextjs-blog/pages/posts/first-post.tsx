import { Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <Flex
      m="10"
      w="100px"
      h="10vh"
      bg="blue.500"
      boxShadow="md"
      rounded="lg"
      align="center"
      justify="center"
    >
      <FaGithub color="white" size="3em" />
    </Flex>
  );
}