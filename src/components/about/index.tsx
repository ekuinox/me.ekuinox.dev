import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import TwitterIcon from '@iconify/icons-ant-design/twitter-outlined';
import GitHubIcon from '@iconify/icons-ant-design/github-outlined';
import EmailIcon from '@iconify/icons-ant-design/mail-outlined';
import SteamIcon from '@iconify/icons-cib/steam';
import { Works } from './works';
import { Avatar } from './avatar';

const H1 = styled.h1`
  font-size: 30px;
  padding: 1vh 0;
`;

const Hr = styled.hr`
  padding: 2vh 0;
`;

const Paragraph = styled.p`
  margin: auto;
  word-wrap: break-word;
  padding: 1vh 0;
`;

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

export const About = (): JSX.Element => (
  <>
    <Avatar src={'https://github.com/ekuinox.png'} />
    <H1>{'ekuinox | れもくす'}</H1>
    <Social.Ul>
      {[
        { url: 'https://twitter.com/remokusu', icon: TwitterIcon },
        { url: 'https://github.com/ekuinox', icon: GitHubIcon },
        { url: 'https://steamcommunity.com/id/lm0x', icon: SteamIcon },
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
    <Hr />
    <Works />
  </>
);
