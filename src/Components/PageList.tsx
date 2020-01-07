import * as React from 'react'

export const UL: React.StatelessComponent<{}> = (props) => (
	<ul  style={{fontSize: '2vh', margin: '1em 0', padding: '0 2em'}}>
		{props.children}
	</ul>
)

export const LI: React.StatelessComponent<{}> = (props) => (
	<li style={{marginBottom: '1.2em'}}>
		{props.children}
	</li>
)
