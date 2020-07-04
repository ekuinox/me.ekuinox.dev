import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion } from './accordion';
import { Label } from './label';

const favorites = [
  ['どうして私が美術科に!?'],
  ['きんいろモザイク'],
  ['球詠'],
  ['海色マーチ'],
  ['放課後すとりっぷ'],
  ['ぱぺっとコール!'],
  ['ななどなどなど'],
  ['キャッチャー・イン・ザ・ライム'],
  ['Aiobahn'],
  ['RetroVision'],
  ['Da Tweekaz'],
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
  padding: 0.3vh 0.5vw;
`;

const Favorite = styled.p`
  margin: auto;
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
          {favorites.map(([favorite], index) => (
            <Li key={index}>
              <Favorite>{favorite}</Favorite>
            </Li>
          ))}
        </Ul>
      </Accordion>
    </Box>
  );
};
