import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * https://codesandbox.io/s/framer-motion-accordion-qx958?file=/src/Example.tsx
 */
export const Accordion = (props: {
  children: ReactNode;
  expanded: boolean;
}): JSX.Element => (
  <AnimatePresence initial={false}>
    {props.expanded && (
      <motion.section
        key="content"
        initial="collapsed"
        animate="open"
        exit="collapsed"
        variants={{
          open: { opacity: 1, y: 0, height: 'auto' },
          collapsed: { opacity: 0, y: '1vh', height: 0 },
        }}
        transition={{ duration: 0.4 }}
      >
        {props.children}
      </motion.section>
    )}
  </AnimatePresence>
);
