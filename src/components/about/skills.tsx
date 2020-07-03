import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion } from './accordion';
import { Label } from './label';

const skills = [
  ['C++', 'templateを乱用することができる。'],
  ['TypeScript', 'tsconfigへの理解がない。'],
  ['React', 'Refが何かわからない。'],
  ['Direct3D', '見様見真似でゲームが作れる'],
  ['UE4', 'C++でコンポーネントを書くことができる。'],
  ['Scala', '暗黙クラスを乱用することができる。'],
  ['Rust', 'Copy, Cloneを乱用することができる。'],
  ['Linux', 'Debian系すらまともに扱えない。'],
  ['PHP', '7以降じゃないと何もできない。'],
] as const;

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
  padding: 0.3vh 1vw;
`;

const SkillName = styled(
  ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isActive: _,
    ...props
  }: { isActive: boolean } & React.HTMLProps<HTMLLabelElement>) => (
    <label {...props} />
  )
)`
  cursor: pointer;
  margin: auto;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'weight')};
  &:hover {
    font-weight: bold;
  }
`;

export const Skills = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState('');
  return (
    <Box>
      <Label onClick={() => setExpanded(!expanded)} isActive={expanded}>
        {'skills'}
      </Label>
      <Accordion expanded={expanded}>
        <Ul>
          {skills.map(([name]) => (
            <Li key={name}>
              <SkillName
                isActive={name === selected}
                onClick={() => setSelected(selected === name ? '' : name)}
              >
                {name}
              </SkillName>
            </Li>
          ))}
        </Ul>
        {skills.map(([name, body]) => (
          <Accordion key={name} expanded={selected === name}>
            {body}
          </Accordion>
        ))}
      </Accordion>
    </Box>
  );
};
