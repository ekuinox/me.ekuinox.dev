import React from 'react';
import Link from 'next/link';
import { Meta } from '../../common/articles';

const getPosts = async (): Promise<Array<Meta & { to: string }>> => {
  return [
    { title: 'サンプル', to: 'sample' },
  ];
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: await getPosts(),
    },
  };
};

const Posts = ({ posts }: { posts: Array<Meta & { to: string }> }): JSX.Element => {
  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {posts.map(({ title, to }, i) => (
          <li key={i}>
            <Link href={`/posts/${to}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
