import { FC } from 'react';
import { Container } from './container';

export const Layout: FC = props => {
  return (
		<Container>
			{ props.children }
    </Container>
  );
};