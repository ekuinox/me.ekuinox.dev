import * as React from 'react'
import { pink, grey } from '@material-ui/core/colors'
import PageTitle from './PageTitle'

const Page: React.StatelessComponent<{title: string, color?: string}> = (props) => (
	<article style={{
		margin: '1em .5em',
		padding: '1em 1.2em',
		height: 'auto',
		minHeight: '70vh',
		borderRadius: '20px',
		borderStyle: 'solid',
		borderWidth: '2px',
		borderColor: pink[200],
		backgroundColor: grey[100]
	}}>
		<PageTitle title={props.title} color={props.color} />
		{props.children}
	</article>
)

export default Page
