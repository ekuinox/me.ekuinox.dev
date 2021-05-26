import React, { useState } from 'react';
import styled from 'styled-components';
import { Label } from './label';
import Link from 'next/link';

const Box = styled.div`
  padding: 1vh 1vw;
`;

export const Articles = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <Link href='posts'>
        <Label onClick={() => setExpanded(!expanded)} isActive={expanded}>
          {'articles'}
        </Label>
      </Link>
    </Box>
  );
};
