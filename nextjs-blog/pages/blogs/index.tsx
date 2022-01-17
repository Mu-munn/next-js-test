import { Box, Heading } from '@chakra-ui/react'
import { InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head'
import Link from 'next/link'
import { getAllPosts } from '../../utils/api';
import styles from '../styles/Home.module.css'
 
type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags']);

  return {
    props: { allPosts },
  };
};


const Blogs: NextPage<Props> = ({ allPosts }) => (
      //   <Box>
      //   <ul>
      //     {allPosts?.map((post) => (
      //       <Box key={post.slug} mt={10}>
      //         <li>
      //           <Link href={`/docs/${post.slug}`}>
      //             <a>
      //               <Heading>{post.title}</Heading>
      //             </a>
      //           </Link>
      //           <p>{post.date}</p>
      //           <ul>
      //             {post.tags?.map((tag) => (
      //               <li key={tag}>{tag}</li>
      //             ))}
      //           </ul>
      //         </li>
      //       </Box>
      //     ))}
      //   </ul>
      // </Box>
      <Box></Box>
)
  
