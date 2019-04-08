import * as React from 'react'
import PageTitle from '../PageTitle'

export default () => (
	<div>
		<PageTitle title="Likes" />
		<ul>
			<li>
				<a href="http://www.dokidokivisual.com/comics/book/past.php?cid=1290" target="_new">どうして私が美術科に!?</a>
			</li>
			<li>
				<a href="http://www.dokidokivisual.com/comics/book/index.php?cid=1237" target="_new">球詠</a>
			</li>
			<li>
				<a href="http://aiobahn.com/" target="_new">Aiobahn</a>
			</li>
			<li>
				<a href="https://iamyunomi.bandcamp.com/" target="_new">Yunomi</a>
			</li>
		</ul>
	</div>
)

export const path = '/likes'
