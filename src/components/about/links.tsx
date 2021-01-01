import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion } from './accordion';
import { Label } from './label';

const Box = styled.div`
  padding: 1vh 1vw;
`;

const Ul = styled.ul`
  margin: 1vh;
`;

const Li = styled.li`
  margin: 1vh 0;
`;

const urls: ReadonlyArray<readonly [string, string | JSX.Element]> = [
  [
    'https://owo7.com',
    'owo7'
  ],
  [
    'https://aiobahn.net',
    <img
      src='https://aiobahn.net/img/abhn_bird.7fc464b0.gif'
      alt='Aiobahnのほーむぺーじ'
    />
  ],
];

export const Links = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <Label onClick={() => setExpanded(!expanded)} isActive={expanded}>
        {'links'}
      </Label>
      <Accordion expanded={expanded}>
          <Ul>
            {urls.map(([url, title]) => (
              <Li>
                <a href={url} target='_blank'>
                  {title}
                </a>
              </Li>
            ))}
          </Ul>
      </Accordion>
    </Box>
  );
};
