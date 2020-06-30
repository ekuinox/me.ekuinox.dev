import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion } from './accordion';
import { Label } from './label';

/**
 * 成果物のUrlとタイトルのペアのリスト
 */
const deliverables: [string, string, string][] = [
  [
    'https://github.com/ekuinox/Fogo',
    'Fogo',
    'C++で実装したEntity Component System的なライブラリ',
  ],
  [
    'https://github.com/mcymze/Khaos',
    'Khaos',
    'Kotilinで実装したSpigot向けのDigAll',
  ],
  [
    'https://github.com/mcymze/IntegrativeYmzeServerPlugin',
    'IntegrativeYmzeServerPlugin',
    'Scalaで実装しているSpigotのプラグイン',
  ],
  [
    'https://github.com/ekuinox/red_drink',
    'red_drink',
    'Rustで実装している途中の自宅サーバのダッシュボード',
  ],
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
  font-size: 18px;
  text-decoration: underline;
`;

const Paragraph = styled.p`
  font-size: 15px;
  padding: 1vh 0 0 0;
`;

const Box = styled.div`
  padding: 1vh 1vw;
`;

export const Works = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Box>
      <Label onClick={() => setExpanded(!expanded)} isActive={expanded}>
        {'works'}
      </Label>
      <Accordion expanded={expanded}>
        <Ul>
          {deliverables.map(([url, title, desc]) => (
            <Li key={url}>
              <div>
                <Anchor href={url}>{title}</Anchor>
                <Paragraph>{desc}</Paragraph>
              </div>
            </Li>
          ))}
        </Ul>
      </Accordion>
    </Box>
  );
};
