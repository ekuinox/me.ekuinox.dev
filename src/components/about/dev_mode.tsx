import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { motion } from 'framer-motion';
import { SnackBar } from './snackbar';

const Message = styled.div`
  background-color: #a9dbde;
  color: #003327;
  text-align: center;
  ${media.lessThan('medium')`
    padding: 5px;
    width: 95vw;
    border-radius: 5px;
  `}
  ${media.greaterThan('medium')`
    padding: 5px 15px;
    border-radius: 10px / 15px;
	`}
`;

const Box = styled.div`
  padding: 1vh 1vw;
`;

const Anchor = motion.custom(styled.a`
  text-decoration: underline;
  cursor: pointer;
`);

const requiredCount = 7;
const makeMessage = (count: number) => {
  const startingMessage = 4;
  if (requiredCount < count) return 'はやくコントリビュートしてください!';
  if (count === requiredCount) return 'デベロッパーモードになりました!';
  if (count >= startingMessage)
    return `あと${requiredCount - count}回タップしてください!`;
  return null;
};
const durationMessageVisible = 5000;

export const DevMode = ({ count }: { count: number }): JSX.Element => {
  const [message, setMessage] = useState<string | null>(null);
  const [timeoutHandler, setTimeoutHandler] = useState<number | null>(null);
  useEffect(() => setMessage(makeMessage(count)), [count]);
  useEffect(() => {
    if (message == null) return;
    if (timeoutHandler != null) {
      clearTimeout(timeoutHandler);
    }
    setTimeoutHandler(
      setTimeout(() => setMessage(null), durationMessageVisible)
    );
  }, [message]);
  return (
    <>
      <SnackBar enabled={message != null}>
        <Message>{message}</Message>
      </SnackBar>
      {count >= requiredCount && (
        <Box>
          <Anchor
            href="https://github.com/ekuinox/ekuinox.dev"
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 0, height: 'auto' }}
            animate={{ opacity: 1, y: '1vh', height: 0 }}
          >
            {'contribute to ekuinox.dev'}
          </Anchor>
        </Box>
      )}
    </>
  );
};
