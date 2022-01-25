import { Button, HStack, IconButton, VStack } from "@chakra-ui/react";
import { MdPhone } from "react-icons/md";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa"
import router from "next/router";

export default function SnsLinks() {
    const handleClick = (e) => {
        e.preventDefault()
        window.open('https://github.com/Mu-munn')
    }

    return (
        <VStack spacing='10px'>
            <IconButton
                boxShadow='xl' rounded='md'
                // variant='solid'
                colorScheme='teal'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<FaGithub />}
                onClick={
                    handleClick
                }
            />
            <IconButton
                boxShadow='xl'
                rounded='md'
                //variant='outline'
                colorScheme='teal'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<FaTwitter />}
            />
            <IconButton
                boxShadow='xl'
                rounded='md'
                //variant='outline'
                colorScheme='teal'
                aria-label='Call Sage'
                fontSize='20px'
                icon={<FaFacebook />}
            />
            {/* <Button colorScheme='teal' variant='outline' boxShadow='xl' rounded='md' bg='white' h="44px">
                連絡する
            </Button> */}
        </VStack>
    );
}

function href(href: any) {
    throw new Error("Function not implemented.");
}
