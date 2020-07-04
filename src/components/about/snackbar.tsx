import React, { HTMLProps } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

type Props = HTMLProps<HTMLDivElement> & { enabled: boolean };

const SnackBarBody = styled(motion.div)`
  position: fixed;
  left: 50%;
  bottom: 1vh;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const SnackBar = ({ enabled, ...props }: Props): JSX.Element => (
  <AnimatePresence>
    {enabled && (
      <SnackBarBody
        initial="init"
        animate="enabled"
        exit="collapsed"
        variants={{
          init: { opacity: 0 },
          enabled: { opacity: 1 },
          collapsed: { opacity: 0 },
        }}
      >
        {props.children}
      </SnackBarBody>
    )}
  </AnimatePresence>
);
