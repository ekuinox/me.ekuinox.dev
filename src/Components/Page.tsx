import * as React from 'react'
import { pink, grey } from '@material-ui/core/colors'
import { Typography } from '@material-ui/core'
import PageTitle from './PageTitle'

const Page: React.StatelessComponent<{title: string, color?: string}> = (props) => (
	<div style={{
		marginLeft: '5px',
		marginRight: '5px',
		paddingTop: '5px',
		paddingLeft: '10px',
		paddingRight: '10px',
		height: '70vh',
		borderRadius: '20px',
		borderStyle: 'solid',
		borderWidth: '2px',
		borderColor: pink[200],
		backgroundColor: grey[100],
		position: 'relative'
	}}>
		<PageTitle title={props.title} color={props.color} />
		{props.children}
		<a href='https://gist.github.com/ekuinox/4cda6cee3325412bcb18e9e53bdb5ce7' style={{textAlign: 'center', position: 'absolute', left: 0, right: 0, bottom: 0}}>
			<Typography style={{fontSize: '5vh', marginLeft: '5vh', color: 'orange', fontStyle: 'oblique', fontFamily: 'ＭＳ Ｐゴシック', textDecorationLine: 'underline'}}>ekuinoxをアルバイトで雇って欲しい!!!!（詳細はここ）</Typography>
		</a>
	</div>
)

export default Page
