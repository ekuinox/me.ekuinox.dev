import Head from 'next/head';
import { Layout } from '../components/layout';
import styled from 'styled-components';
import media from "styled-media-query";

const Main = styled.main`
	${ media.lessThan('medium')`
		width: 100%;
		padding: 0;
	` }
	${ media.greaterThan('medium')`
		width: 50%;
		padding: 5%;
		` }
	margin: auto;
	text-align: center;
`;

const Avatar = styled.img`
	height: 150px;
	border-radius: 50%;
`

const H1 = styled.h1`
`

const Paragraph = styled.p`
	margin: auto;
	word-wrap: break-word;
`;

const Home = () => {
	return (
		<Layout>
			<Head>
				<title>{ 'ekuinox.dev' }</title>
			</Head>
			<Main>
					<Avatar src={ 'https://github.com/ekuinox.png' } />
					<H1>{ 'ekuinox | れもくす' }</H1>
					<Paragraph>{ `
						こんにちは。関西でプログラマをやることで生きているオタクです。
						漫画と音楽が好きです。どうして私が美術科に!?とAiobahnを推しています。
					` }</Paragraph>
			</Main>
  	</Layout>
  );
};

export default Home;
