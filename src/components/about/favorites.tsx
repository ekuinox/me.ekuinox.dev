import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion } from './accordion';
import { Label } from './label';

const favorites: [string, { url?: string }?][] = [
  [
    'どうして私が美術科に!?',
    { url: 'http://www.dokidokivisual.com/comics/book/past.php?cid=1290' },
  ],
  [
    'きんいろモザイク',
    { url: 'http://www.dokidokivisual.com/comics/book/past.php?cid=489' },
  ],
  [
    '球詠',
    { url: 'http://www.dokidokivisual.com/comics/book/index.php?cid=1237' },
  ],
  [
    '海色マーチ',
    { url: 'http://www.dokidokivisual.com/comics/book/index.php?cid=1542' },
  ],
  [
    '放課後すとりっぷ',
    { url: 'http://www.dokidokivisual.com/comics/book/index.php?cid=1475' },
  ],
  [
    'ぱぺっとコール!',
    { url: 'http://www.dokidokivisual.com/comics/book/past.php?cid=1208' },
  ],
  [
    'ななどなどなど',
    { url: 'http://dokidokivisual.com/comics/book/past.php?cid=1602' },
  ],
  [
    'キャッチャー・イン・ザ・ライム',
    { url: 'https://bigcomicbros.net/work/6345/' },
  ],
  [
    'Aiobahn',
    { url: 'https://www.youtube.com/channel/UC3XZCxTQ55JkT35W27Jtbyg' },
  ],
  ['RetroVision', { url: 'https://www.youtube.com/user/TH3D4RKR4C3' }],
  ['Da Tweekaz', { url: 'https://www.youtube.com/user/Tweekaz' }],
  ['Laszlo'],
  ['舐達麻'],
  ['Eminem'],
  ['Sum 41'],
  ['道路'],
  ['ダム'],
  ['斜張橋'],
  ['めりけんやの鶏天ぶっかけうどん'],
];

const Box = styled.div`
  padding: 1vh 1vw;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1vh;
`;

const Li = styled.li`
  padding: 8px 3px;
`;

const Favorite = styled.p`
  margin: auto;
  padding: 1px 0;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
`;

export const Favorites = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <Label onClick={() => setExpanded(!expanded)} isActive={expanded}>
        {'favorites'}
      </Label>
      <Accordion expanded={expanded}>
        <Ul>
          {favorites.map(([favorite, options], index) => (
            <Li key={index}>
              {options?.url == null ? (
                <Favorite>{favorite}</Favorite>
              ) : (
                <a href={options.url} target="_blank" rel="noreferrer noopener">
                  <Favorite>{favorite}</Favorite>
                </a>
              )}
            </Li>
          ))}
        </Ul>
      </Accordion>
    </Box>
  );
};
