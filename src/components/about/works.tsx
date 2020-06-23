import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  display: table;
  margin: 0 auto;
  padding: 1vh 0;
`;

const Li = styled.li`
  display: block;
  vertical-align: middle;
  text-align: center;
  margin: 1vh;
  padding: 1vh;
  border-width: 1vh;
  border: solid;
`;

const Anchor = styled.a`
  font-size: 2vh;
`;

const Label = styled.label`
  font-size: 15px;
`;

/**
 * 成果物のUrlとタイトルのペアのリスト
 */
const deliverables: [string, string][] = [
  ['https://github.com/ekuinox/Fogo', 'ekuinox/Fogo'],
  ['https://github.com/mcymze/Khaos', 'mcymze/Khaos'],
  ['https://github.com/ekuinox/red_drink', 'ekuinox/red_drink'],
];

export const Works = (): JSX.Element => {
  return (
    <div>
      <Label>{'作ったものとか'}</Label>
      <div>
        <Ul>
          {deliverables.map(([url, title]) => (
            <Li key={url}>
              <Anchor href={url}>{title}</Anchor>
            </Li>
          ))}
        </Ul>
      </div>
    </div>
  );
};
