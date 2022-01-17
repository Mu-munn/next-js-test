import { NextPage, InferGetStaticPropsType } from 'next';
import { Box, Center, Heading, Link } from '@chakra-ui/react';
import { getAllPosts } from '..//utils/api';
import Particles from 'react-particles-js';
import { NavMenu } from '../components/NavbarWithSubmenu 2/NavMenu';
import { NavContent } from '../components/NavbarWithSubmenu 2/NavContent';
import AppBar from '../components/appBar';
import BackGround from '../components/backGround';
import Feature1 from '../components/feature1';


export default function Home() {
  return (
    <Box h="">
      {/* <AppBar /> */}
      {/* <BackGround/> */}
      <Center>
      <Feature1/>
      </Center>
      
    </Box>
  );
}