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
  margin: 0.5vh 0;
`;

export const Links = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <Label onClick={() => setExpanded(!expanded)} isActive={expanded}>
        {'links'}
      </Label>
      <Accordion expanded={expanded}>
          <Ul>
            <Li>
              <a
                href='https://aiobahn.net'
                target='_blank'
              >
                <img
                  src='https://aiobahn.net/img/abhn_bird.7fc464b0.gif'
                  alt='Aiobahnのほーむぺーじ'
                />
              </a>
            </Li>
          </Ul>
        
      </Accordion>
    </Box>
  );
};
