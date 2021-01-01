import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Article } from '../../components/Article';
import { getMetaList, Meta } from '../../common/articles';

const Li = styled.li`
  marginTop: 1rem;
`;

export const getStaticProps = async () => {
  return {
    props: {
      posts: await getMetaList(),
    },
  };
};

const Posts = ({ posts }: { posts: Array<Meta> }): JSX.Element => {
  return (
    <Article title='記事一覧' to='/posts'>
      <ul>
        {posts.map(({ title, to }, i) => (
          <Li key={i} style={{ listStyleType: 'none' }}>
            <Link href={`/posts/${to}`}>
              <a>{title}</a>
            </Link>
          </Li>
        ))}
      </ul>
    </Article>
  );
};

export default Posts;
