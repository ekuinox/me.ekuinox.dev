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
	</div>
)

export default Page
