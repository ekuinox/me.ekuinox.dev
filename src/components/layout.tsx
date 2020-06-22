import React, { FC } from 'react';
import { Container } from './container';

export const Layout: FC = (props: { children?: React.ReactNode }) => {
  return <Container>{props.children ?? {}}</Container>;
};
