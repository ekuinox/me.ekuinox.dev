import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SnackBar } from './snackbar';
import media from 'styled-media-query';

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

export const DevMode = ({ count }: { count: number }): JSX.Element => {
  const [message, setMessage] = useState('デベロッパーになるにはあと4回タップしてね');
  const [enabled, setEnabled] = useState(true);
  useEffect(() => {
    if (count === 3) {
      setEnabled(true);
      setMessage('デベロッパーになるにはあと4回タップしてね');
      return;
    }
    if (count === 7) {
      setEnabled(true);
      setMessage('デベロッパーモードになりました');
      return;
    }
  }, [count]);
  useEffect(() => {
    if (enabled) {
      //setTimeout(() => setEnabled(false), 5000);
    }
  });
  return (
    <SnackBar enabled={enabled}>
      <Message>{message}</Message>
    </SnackBar>
  );
};
