import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from './layout';
import { Meta } from '../common/articles';

const Main = styled.main`
  ${media.lessThan('medium')`
    width: 100%;
    margin: auto;
    padding: 1vh 5vw;
  `}
  ${media.greaterThan('medium')`
    width: 50%;
    margin: 1rem auto;
    padding: 2.5% 5%;
  `}
  padding: 1rem 1rem;
  text-align: left;
  background-color: white;
`;

const Header = styled.header`
  padding: 0 0.5rem;
  width: 100%;
  ${media.lessThan('medium')`
    text-align: center;
  `}
  ${media.greaterThan('medium')`
    text-align: left;
  `}
`;

const Profile = styled.div`
  padding: 1rem;
  display: flex;
  img {
    margin: auto;
    height: 50px;
    border-radius: 50%;
    margin: 1vh 0;
  }
  span {
    margin: auto 1rem;
  }
  ${media.lessThan('medium')`
    text-align: center;
    margin: 0 auto;
  `}
  ${media.greaterThan('medium')`
    margin: 0 auto;
    text-align: left;
  `}
`;

const Title = styled.div`
  padding: 0.3rem 0;
  font-size: 2rem;
  font-weight: bold;
`;

const Divider = styled.hr`
  border-color: gray;
  padding-bottom: 1rem;
`;

const Body = styled.div`
  padding: 0 0.5rem;
  h1, h2, h3, h4, h5, h6 {
    font-size: 2rem;
    line-height: 3rem;
  }
  ul li {
    margin: 0 0 0 1em;
    padding: 0;
    list-style-type: circle;
    li {
      list-style-type: disc;
      li {
        list-style-type: square;
      }
    }
  }
  line-height: 1.5rem;
`;

const Footer = styled.footer`
  padding-top: 0.5rem;
  text-align: center;
`;

export type Props = {
  children: JSX.Element;
} & Meta;

export const Article = ({ title, children }: Props): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>
          {`${title} | ekuinox.dev`}
        </title>
      </Head>
      <Main>
        <Header>
          <Link href='/'>
            <Profile>
              <img src='/assets/avatar.jpg' />
              <span>
                ekuinox.dev
              </span>
            </Profile>
          </Link>
          <Title>
            {title}
          </Title>
        </Header>
        <Divider />
        <Body>
          {children}
        </Body>
        <Divider />
        <Footer>
          <a href='/posts'>
            記事一覧
          </a>
        </Footer>
      </Main>
    </Layout>
  );
};
