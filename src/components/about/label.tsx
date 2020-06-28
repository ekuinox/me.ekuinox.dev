import React from 'react';
import styled from 'styled-components';
import { motion, HTMLMotionProps } from 'framer-motion';

export const Label = styled(
  ({
    isActive,
    ...props
  }: HTMLMotionProps<'label'> & { isActive: boolean }) => (
    <motion.label
      animate={{ borderColor: isActive ? 'black' : 'gray' }}
      {...props}
    />
  )
)`
  font-size: 20px;
  cursor: pointer;
  margin: auto;
  padding: 1% 25%;
  border-radius: 10% / 30%;
  border: solid;
`;
