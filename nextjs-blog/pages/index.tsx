import { NextPage, InferGetStaticPropsType } from 'next';
import { Box, Link } from '@chakra-ui/react';
import { getAllPosts } from '..//utils/api';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['slug', 'title', 'date', 'tags']);

  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => (
  <ul>
    {allPosts?.map((post) => (
      <Box key={post.slug} mt={10}>
        <li>
          <Link href={`/docs/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
          <p>{post.date}</p>
          <ul>
            {post.tags?.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </li>
      </Box>
    ))}
  </ul>
);
export default Home;