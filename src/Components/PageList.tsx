import * as React from 'react'

export const UL: React.StatelessComponent<{}> = (props) => (
	<ul  style={{fontSize: '2vh'}}>
		{props.children}
	</ul>
)

export const LI: React.StatelessComponent<{}> = (props) => (
	<li style={{marginBottom: '2vh'}}>
		{props.children}
	</li>
)
