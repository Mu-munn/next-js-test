import { Box, Center, Heading } from "@chakra-ui/react";

export default function BackGround() {
    return(
    <Box bgImage="https://images.pexels.com/photos/164005/pexels-photo-164005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        h="100vh"
        w="100%"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="fixed"
        top="0"
        right="0"
        zIndex="0">
    </Box>
    )
}