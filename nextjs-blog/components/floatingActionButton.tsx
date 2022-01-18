import { Box, Button, Center, Heading, HStack, Icon, IconButton, VStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaFacebook, FaBell ,FaChevronCircleUp} from "react-icons/fa";


export default function FloatingActrionButton() {
    const handleClick = (e) => {
        e.preventDefault()
        window.open('https://github.com/Mu-munn')
    }
    return (
        <Box position="fixed" right="20px" bottom="20px">

            <VStack spacing='10px'>
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
                    {/* <Icon
                                position="absolute"
                                 viewBox='0 0 200 200' 
                                 color='red.500'
                                top="0"
                                right="10"
                                >
                                    <path
                                        fill='currentColor'
                                        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
                                    />
                                </Icon> */}

                </HStack>
                {/* <Button colorScheme='teal' variant='outline' boxShadow='xl' rounded='md' bg='white' h="44px">
                連絡する
            </Button> */}
            </VStack>
        </Box>

    )
}