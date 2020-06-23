import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Icon } from '@iconify/react';
import TwitterIcon from '@iconify/icons-ant-design/twitter-outlined';
import GitHubIcon from '@iconify/icons-ant-design/github-outlined';
import EmailIcon from '@iconify/icons-ant-design/mail-outlined';
import SteamIcon from '@iconify/icons-cib/steam';
import { Works } from './works';

const AvatarRotation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`;

const Avatar = styled(
  ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    rotate: _rotate,
    ...props
  }: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > & { rotate: boolean }) => <img {...props} />
)`
  height: 150px;
  border-radius: 50%;
  ${(props) =>
    props.rotate
      ? css`
          animation: ${AvatarRotation} infinite 1s linear;
        `
      : ''}
`;

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

export const About = (): JSX.Element => {
  const [rotate, setRotate] = useState(false);
  return (
    <>
      <Avatar
        src={'https://github.com/ekuinox.png'}
        rotate={rotate}
        onClick={() => setRotate(!rotate)}
      />
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
};
