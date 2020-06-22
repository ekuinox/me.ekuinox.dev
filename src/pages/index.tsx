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

const H2 = styled.h2`
  font-size: 15px;
  padding: 1vh 0;
`;

const Paragraph = styled.p`
  margin: auto;
  word-wrap: break-word;
  padding: 1vh 0;
`;

const Work = {
  Ul: styled.ul`
    display: table;
    margin: 0 auto;
    padding: 1vh 0;
  `,
  Li: styled.li`
    display: block;
    vertical-align: middle;
    text-align: center;
    margin: 1vh;
    padding: 1vh;
    border-width: 1vh;
    border: solid;
  `,
  Anchor: styled.a`
    font-size: 2vh;
  `,
};

const Social = {
  Ul: styled.ul`
    display: table;
    border-collapse: separate;
    border-spacing: 2px 0;
    vertical-align: middle;
    margin: 0 auto;
    padding: 1vh 0;
  `,
  Li: styled.li`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: 0 3vw;
  `,
  Anchor: styled.a`
    display: block;
    font-size: 30px;
  `,
};

const Home = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{'ekuinox.dev'}</title>
      </Head>
      <Main>
        <Avatar src={'https://github.com/ekuinox.png'} />
        <H1>{'ekuinox | れもくす'}</H1>
        <Social.Ul>
          {[
            { url: 'https://twitter.com/remokusu', icon: TwitterIcon },
            { url: 'https://github.com/ekuinox', icon: GitHubIcon },
            { url: 'mailto:depkey@me.com', icon: EmailIcon },
          ].map(({ url, icon }) => (
            <Social.Li key={url}>
              <Social.Anchor href={url}>
                <Icon icon={icon} />
              </Social.Anchor>
            </Social.Li>
          ))}
        </Social.Ul>
        <Paragraph>{`
						こんにちは。関西でプログラマをやることで生きているオタクです。
						漫画と音楽が好きです。どうして私が美術科に!?とAiobahnを推しています。
					`}</Paragraph>
        <H2>{'作ったものとか'}</H2>
        <Work.Ul>
          {[
            ['https://github.com/ekuinox/red_drink', 'ekuinox/red_drink'],
            ['https://github.com/ekuinox/Fogo', 'ekuinox/Fogo'],
            ['https://github.com/mcymze/Khaos', 'mcymze/Khaos'],
          ].map(([url, title]) => (
            <Work.Li key={url}>
              <Work.Anchor href={url}>{title}</Work.Anchor>
            </Work.Li>
          ))}
        </Work.Ul>
      </Main>
    </Layout>
  );
};

export default Home;
