import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion } from './accordion';
import { Label } from './label';

const Box = styled.div`
  padding: 1vh 1vw;
`;

export const Skills = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <Label onClick={() => setExpanded(!expanded)} isActive={expanded}>
        {'skills'}
      </Label>
      <Accordion expanded={expanded}>
        {'なにもできないクソ雑魚なにもできないクソ雑魚なにもできないクソ雑魚'}
      </Accordion>
    </Box>
  );
};
