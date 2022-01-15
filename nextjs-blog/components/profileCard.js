import { Avatar, Text, Heading, Flex, Box } from "@chakra-ui/react";
import { BsPencil, BsPeopleFill, BsLink45Deg, BsBuilding } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

export default function ProfileCard() {
  return (
    <Flex w="full" h="160px" bg="blue.50" rounded="xl" boxShadow="md" mb="2">
      <Flex align="center" w="20%">
        <Avatar size="xl" mx="auto" src="https://avatars.githubusercontent.com/u/86332503?v=4"/>
      </Flex>
      <Box
      // bgColor="red"
      //   w="70%"
      //   bgPosition="right"
      //   bgSize="220px"
      //   bgRepeat="no-repeat"
      //   mr="4"
      >
        <Flex align="center" my="5">

          <Heading pr="4" fontSize="2xl" color="gray.600">
            Mukaigawara Yuuki
          </Heading>
          <BsPencil color="#4d4d4d" />
          
        </Flex>


        <Flex mb="3" color="gray.500">
          <Flex align="center" w="35%">
            <FiMapPin />
            <Text pl="2">Nagoya, JAPAN</Text>
          </Flex>

          <Flex align="center">
            <BsPeopleFill />
            <Text pl="2">1800+ connection </Text>
          </Flex>


        </Flex>



        <Flex mb="5" color="gray.500">
          <Flex align="center" w="35%">
            <BsLink45Deg />
            <Text pl="2">https://mukai.com/</Text>
          </Flex>
          <Flex align="center">
            <BsBuilding />
            <Text pl="2">Canly Co.,Ltd </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}