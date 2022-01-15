import {Stack, Flex, Text, Box, Heading, SimpleGrid, Icon} from "@chakra-ui/react";
import { FcAssistant, FcBullish, FcCommandLine } from "react-icons/fc";

const Feature = ({ title, text, icon, bgColor }) => {
  return (
    <Stack align="center" shadow="md" p="5" rounded="md" bg={bgColor}>
      <Flex
        w="16"
        h="16"
        align="center"
        justify="center"
        rounded="full"
        bg="gray.100"
        mb="1"
      >
        {icon}
      </Flex>
      <Text fontWeight="600">{title}</Text>
      <Text color="gray.600" textAlign="justify" fontSize="xs" p="2">
        {text}
      </Text>
    </Stack>
  );
};

export default function JobDescription() {
  return (
    <Box
      w="full"
      mt="6"
      ml="5"
      p="6"
      boxShadow="xl"
      rounded="md"
      border="1px"
      borderColor="gray.50"
    >
      <Heading ml="2" mb="5" fontSize="xl">
        Job Description
      </Heading>
      <SimpleGrid columns="3" spacing="6">
        <Feature
          icon={<Icon as={FcAssistant} w="10" h="10" />}
          title="Customer Success"
          text="This is a position where you will work with customers who have implemented Canly to help them implement,
                 utilize, and create successful experiences, as well as solve problems. "
          bgColor="red.50"
        />
        <Feature
          icon={<Icon as={FcBullish} w="10" h="10" />}
          title="Marketing"
          text="This is a marketing position that will be responsible for generating leads for our company,
                which is rapidly growing in terms of users, and is in the phase of creating a marketing system from scratch with a focus on web marketing. "
          bgColor="cyan.50"
        />
        <Feature
          icon={<Icon as={FcCommandLine} w="10" h="10" />}
          title="Development"
          text="We are rebuilding our website into a SPA structure using Next.js. Along with that, we will be changing the server-side language from Laravel to Go.
                There will temporarily be two systems, one old and one new, but we are looking for someone to drive ..."
          bgColor="orange.50"
        />
      </SimpleGrid>
    </Box>
  );
};