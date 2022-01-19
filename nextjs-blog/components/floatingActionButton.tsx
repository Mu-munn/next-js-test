import { Box, Button, Center, Heading, HStack, Icon, IconButton, VStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaFacebook, FaBell, FaChevronCircleUp } from "react-icons/fa";


export default function FloatingActrionButton() {
    const handleClick = (e) => {
        e.preventDefault()
        window.open('https://github.com/Mu-munn')
    }
    return (
        <Box position="fixed" right="20px" bottom="40px">

            <VStack spacing='10px'>
                <IconButton
                    size="md"
                    boxShadow='xl'
                    rounded='md'
                    variant='outline'
                    colorScheme='black'
                    aria-label='Call Sage'
                    fontSize='20px'
                    icon={<FaGithub />}
                    onClick={handleClick}
                />

                <IconButton
                    size="md"
                    boxShadow='xl'
                    rounded='md'
                    variant='outline'
                    colorScheme='twitter'
                    aria-label='Call Sage'
                    fontSize='20px'
                    icon={<FaTwitter />}
                />
                <HStack>
                    <IconButton
                        size="lg"
                        //  boxShadow='xl'
                        rounded='md'
                        //variant='outline'
                        colorScheme='teal'
                        aria-label='Call Sage'
                        fontSize='20px'
                        icon={<FaChevronCircleUp />}
                    />


                </HStack>
                {/* <Button colorScheme='teal' variant='outline' boxShadow='xl' rounded='md' bg='white' h="44px">
                連絡する
            </Button> */}
            </VStack>
        </Box>

    )
}