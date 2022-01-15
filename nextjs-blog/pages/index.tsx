import { Flex, Divider, Center, Spacer, Image, Box } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import SideNav from "../components/navBar";
import Box1 from "../components/box1";
import Row1 from "../components/row1"
import SearchBox from "../components/serchBox";
import BlogPostWithImage from "../components/BlogPostWithImage";
import ProfileCard from "../components/ProfileCard";
import JobDescription from "../components/JobDescription";

export default function Home() {
  return (
    <Box h="1000px">
      <SideNav />
      <Box1/>
      <Row1/>
    </Box>
  );
}
