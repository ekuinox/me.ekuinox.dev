import React from 'react';
import styled from 'styled-components';
import { Social } from './social';
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

export const About = (): JSX.Element => (
  <>
    <Avatar src={'/assets/avatar.jpg'} />
    <H1>{'ekuinox | れもくす'}</H1>
    <Social />
    <Paragraph>{`
			こんにちは。関西でプログラマをやることで生きているオタクです。
      漫画と音楽が好きです。どうして私が美術科に!?とAiobahnを推しています。
    `}</Paragraph>
    <Hr />
    <Works />
  </>
);
