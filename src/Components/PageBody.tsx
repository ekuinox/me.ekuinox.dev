import * as React from 'react'
import { pink, grey } from '@material-ui/core/colors'

export default (props: React.Props<{}>) => (
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
        backgroundColor: grey[100]
	}}>
		{props.children}
	</div>
)
