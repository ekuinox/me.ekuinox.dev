import React from 'react';
import Link from 'next/link';
import { createReadMetaListTask, Meta } from '../../common/articles';

export const getStaticProps = async () => {
  return {
    props: {
      posts: await createReadMetaListTask()(),
    },
  };
};

const Posts = ({ posts }: { posts: Array<Meta> }): JSX.Element => {
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
