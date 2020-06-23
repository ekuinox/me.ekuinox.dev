import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Layout } from '../components/layout';
import { About } from '../components/about';

const Main = styled.main`
  ${media.lessThan('medium')`
		width: 100%;
		padding: 5vh;
	`}
  ${media.greaterThan('medium')`
		width: 50%;
		padding: 5%;
		`}
	margin: auto;
  text-align: center;
`;

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{'ekuinox.dev'}</title>
      </Head>
      <Main>
        <About />
      </Main>
    </Layout>
  );
};

export default Home;
