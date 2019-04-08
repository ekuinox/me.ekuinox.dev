import * as React from 'react'
import PageTitle from '../PageTitle'
import { UL, LI } from '../PageList'

export default () => (
	<div>
		<PageTitle title="Likes" />
		<UL>
			<LI>
				<a href="http://www.dokidokivisual.com/comics/book/past.php?cid=1290" target="_new">どうして私が美術科に!?</a>
			</LI>
			<LI>
				<a href="http://www.dokidokivisual.com/comics/book/index.php?cid=1237" target="_new">球詠</a>
			</LI>
			<LI>
				<a href="http://aiobahn.com/" target="_new">Aiobahn</a>
			</LI>
			<LI>
				<a href="https://iamyunomi.bandcamp.com/" target="_new">Yunomi</a>
			</LI>
		</UL>
	</div>
)

export const path = '/likes'
