import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion } from './accordion';
import { Label } from './label';

/**
 * 成果物のUrlとタイトルのペアのリスト
 */
const deliverables: [string, string][] = [
  ['https://github.com/ekuinox/Fogo', 'ekuinox/Fogo'],
  ['https://github.com/mcymze/Khaos', 'mcymze/Khaos'],
  ['https://github.com/ekuinox/red_drink', 'ekuinox/red_drink'],
];

const Ul = styled.ul`
  display: table;
  margin: 0 auto;
`;

const Li = styled.li`
  display: block;
  text-align: center;
  margin: 1vh;
  padding: 1vh;
`;

const Anchor = styled.a`
  font-size: 2vh;
`;

export const Works = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <Label onClick={() => setExpanded(!expanded)} isActive={expanded}>
        {'works'}
      </Label>
      <Accordion expanded={expanded}>
        <Ul>
          {deliverables.map(([url, title]) => (
            <Li key={url}>
              <Anchor href={url}>{title}</Anchor>
            </Li>
          ))}
        </Ul>
      </Accordion>
    </>
  );
};
