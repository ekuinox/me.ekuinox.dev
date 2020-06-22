import React from 'react';
import Head from 'next/head';
import { Layout } from '../components/layout';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Icon } from '@iconify/react';
import TwitterIcon from '@iconify/icons-ant-design/twitter-outlined';
import GitHubIcon from '@iconify/icons-ant-design/github-outlined';
import EmailIcon from '@iconify/icons-ant-design/mail-outlined';

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

const Avatar = styled.img`
  height: 150px;
  border-radius: 50%;
`;

const H1 = styled.h1`
  font-size: 30px;
  padding: 1vh 0;
`;

const Paragraph = styled.p`
  margin: auto;
  word-wrap: break-word;
  padding: 1vh 0;
`;

const Ul = styled.ul`
  display: table;
  border-collapse: separate;
  border-spacing: 2px 0;
  vertical-align: middle;
  margin: 0 auto;
  padding: 1vh 0;
`;
const Li = styled.li`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const Anchor = styled.a`
  display: block;
  font-size: 30px;
  padding: 0 3vw;
`;

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{'ekuinox.dev'}</title>
      </Head>
      <Main>
        <Avatar src={'https://github.com/ekuinox.png'} />
        <H1>{'ekuinox | れもくす'}</H1>
        <Paragraph>{`
						こんにちは。関西でプログラマをやることで生きているオタクです。
						漫画と音楽が好きです。どうして私が美術科に!?とAiobahnを推しています。
					`}</Paragraph>
        <Ul>
          {[
            { url: 'https://twitter.com/remokusu', icon: TwitterIcon },
            { url: 'https://github.com/ekuinox', icon: GitHubIcon },
            { url: 'mailto:depkey@me.com', icon: EmailIcon },
          ].map(({ url, icon }) => (
            <Li key={url}>
              <Anchor href={url}>
                <Icon icon={icon} />
              </Anchor>
            </Li>
          ))}
        </Ul>
      </Main>
    </Layout>
  );
};

export default Home;
