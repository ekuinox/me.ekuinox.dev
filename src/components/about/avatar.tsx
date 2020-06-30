import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Avatar = styled(
  (props: { src: string; alt?: string }): JSX.Element => (
    <motion.img
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    />
  )
)`
  height: 150px;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: #f26f9d;
`;
