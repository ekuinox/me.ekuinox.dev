import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
);

export default App;
