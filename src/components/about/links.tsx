import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Accordion } from './accordion';
import { Label } from './label';

const Box = styled.div`
  padding: 1vh 1vw;
`;

const Dl = styled.ul`
  padding: 1.5vh;
`;

const Dt = styled.li`
  padding-bottom: 0.3vh;
`;

const Dd = styled.li`
`;


export const Links = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <Label onClick={() => setExpanded(!expanded)} isActive={expanded}>
        {'links'}
      </Label>
      <Accordion expanded={expanded}>
          <Dl>
            <Dt>おれが大好きなAiobahnのホームページ</Dt>
            <Dd>
              <a
                href='https://aiobahn.net'
                target='_blank'
              >
                <img
                  src='https://aiobahn.net/img/abhn_bird.7fc464b0.gif'
                  alt='Aiobahnのほーむぺーじ'
                />
              </a>
            </Dd>
          </Dl>
        
      </Accordion>
    </Box>
  );
};
