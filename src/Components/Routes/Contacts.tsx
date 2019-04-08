import * as React from 'react'
import PageTitle from '../PageTitle'

export default () => (
	<div>
		<PageTitle title="Contacts" />
		<ul style={{fontSize: '2vh'}}>
			<li><a href="https://twitter.com/ekuinox" target="_new">Twitter</a></li>
			<li><a href="https://github.com/ekuinox" target="_new">GitHub</a></li>
			<li><a href="https://mstdn.club/@lm0x" target="_new">Mastodon(mstdn.club)</a></li>
			<li><a href="https://keybase.io/lm0x" target="_new">Keybase</a></li>
			<li>Discord: ekuinox#1378</li>
			<li><a href="mailto:eku@lmx.pw">eku@lmx.pw</a></li>
		</ul>
	</div>
)

export const path = '/contacts'
