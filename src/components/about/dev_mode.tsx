import React, { useState, useEffect } from 'react';
import { SnackBar } from './snackbar';

export const DevMode = ({ count }: { count: number }): JSX.Element => {
  const [message, setMessage] = useState('');
  const [enabled, setEnabled] = useState(false);
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
      setTimeout(() => setEnabled(false), 5000);
    }
  });
  return <SnackBar enabled={enabled}>{message}</SnackBar>;
};
