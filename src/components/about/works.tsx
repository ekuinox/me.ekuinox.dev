import React, { useState } from 'react';
import styled, { css } from 'styled-components';

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

const Accordion = styled(
  ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isOpened,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    durations,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > & {
    isOpened: boolean;
    durations?: { [key in 'open' | 'close']: number };
  }) => <div {...props} />
)`
  max-height: ${(props) => (props.isOpened ? '100%' : '0')};
  overflow: hidden;
  transition: max-height;
  ${(props) =>
    props.isOpened
      ? props.durations?.close ?? css`10ms`
      : props.durations?.open ?? css`10ms`};
`;

export const Works = (): JSX.Element => {
  const [isOpened, setOpened] = useState(false);
  return (
    <>
      <Label onClick={() => setOpened(!isOpened)}>{'私の制作物'}</Label>
      <Accordion isOpened={isOpened}>
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
