import React from 'react';
import styled from 'styled-components';
import { Social } from './social';
import { Works } from './works';
import { Avatar } from './avatar';
import { Skills } from './skills';
import { Favorites } from './favorites';
import { DevMode } from './dev_mode';
import { Links } from './links';
import { Articles } from './articles';

const H1 = styled.h1`
  font-size: 30px;
  padding: 1vh 0;
`;

const Hr = styled.hr`
  padding: 1vh 0;
`;

const Bio = styled.p`
  margin: auto;
  word-wrap: break-word;
  padding: 1vh 0;
`;

export const About = (): JSX.Element => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <Avatar src={'/assets/avatar.jpg'} onClick={() => setCount(count + 1)} />
      <H1>{'ekuinox | れもくす'}</H1>
      <Social />
      <Bio>{`
	  		こんにちは。関西でプログラマをやることで生きているオタクです。
        漫画と音楽が好きです。どうして私が美術科に!?とAiobahnを推しています。
      `}</Bio>
      <Hr />
      <Works />
      <Skills />
      <Favorites />
      <Links />
      <Articles />
      <DevMode count={count} />
    </>
  );
};
