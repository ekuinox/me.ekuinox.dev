import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Avatar = styled(
  (props: { src: string; alt?: string; onClick?: () => void }): JSX.Element => (
    <motion.img
      initial={{ scale: 0.8 }}
      animate={{
        scale: 1,
        borderColor: '#f26f9d',
        borderWidth: '2px',
        borderStyle: 'solid',
      }}
      whileTap={{ scale: 0.9 }}
      {...props}
    />
  )
)`
  height: 150px;
  border-radius: 50%;
  margin: 1vh 0;
`;
