import { Box, Button, Center, Heading, HStack, Icon, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaFacebook, FaBell, FaChevronCircleUp } from "react-icons/fa";


export default function FloatingActrionButton() {
    const { colorMode, toggleColorMode } = useColorMode()
    const handleClick = (e) => {
        e.preventDefault()
        window.open('https://github.com/Mu-munn')
    }
    const topButtonClick = (e) => {
        window.scroll({ top: 0, behavior: 'smooth' });
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
                    onClick={
                        (e) => {
                            e.preventDefault()
                            window.open('https://twitter.com/MukaigawaraYuki')
                        }}
                />
                <HStack>
                    {/* <IconButton
                        // _focus={{_focus: "none"}} //周りの青いアウトラインが気になる場合に消す方法
                        mb={10}
                        aria-label="DarkMode Switch"
                        icon={colorMode === 'light' ? <FaFacebook /> : <FaGithub />} //自分の好みでSunアイコンはreact-iconsを使用しています
                        onClick={toggleColorMode}
                    /> */}
                    <IconButton
                        size="lg"
                        //  boxShadow='xl'
                        rounded='md'
                        //variant='outline'
                        colorScheme='teal'
                        aria-label='Call Sage'
                        fontSize='20px'
                        icon={<FaChevronCircleUp />}
                        onClick={
                            topButtonClick
                        }
                    />


                </HStack>
                {/* <Button colorScheme='teal' variant='outline' boxShadow='xl' rounded='md' bg='white' h="44px">
                連絡する
            </Button> */}
            </VStack>
        </Box>

    )
}