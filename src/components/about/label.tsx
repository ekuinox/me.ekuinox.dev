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
  text-decoration: underline;
  letter-spacing: 2px;
`;
