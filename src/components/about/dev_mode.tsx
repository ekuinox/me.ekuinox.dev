import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { motion } from 'framer-motion';
import { SnackBar } from './snackbar';

const Message = styled.div`
  background-color: #65fcd9;
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

const requiredTappedCount = 7;
const startingMessageCount = 4;
const becameDeveloperMessage = 'デベロッパーモードになりました';
const alreadyDeveloperMessage = 'はやくコントリビュートしてください！';
const makeCountMessage = (count: number) =>
  `デベロッパーになるにはあと${requiredTappedCount - count}回タップしてね`;

export const DevMode = ({ count }: { count: number }): JSX.Element => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (requiredTappedCount < count) {
      setMessage(alreadyDeveloperMessage);
      return;
    }
    if (count === requiredTappedCount) {
      setMessage(becameDeveloperMessage);
      return;
    }
    if (count >= startingMessageCount) {
      setMessage(makeCountMessage(count));
      return;
    }
  }, [count]);
  useEffect(() => {
    if (message) {
      setTimeout(() => setMessage(''), 5000);
    }
  }, [message]);
  return (
    <>
      <SnackBar enabled={message != ''}>
        <Message>{message}</Message>
      </SnackBar>
      {count >= requiredTappedCount && (
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
