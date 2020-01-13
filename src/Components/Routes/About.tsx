import * as React from 'react'
import Page from '../Page'
import { Typography } from '@material-ui/core'

export default () => (
	<Page title="About">
		<Typography
			style={{
				fontSize: '2vh',
				margin: '3vh'
			}}
		>
			<p>れもくすと言います。ekuinoxやlm0Xなどと名乗ることもあります。</p>
			<p>C++でDirect3DとかUE4とかをやってました。今はRustとかScalaに興味があります。</p>
			<p>Future Houseが好きです。アーティストで言えばAiobahnが好き。</p>
			<p>まんがタイムきらら4誌を追っています。最近は追いつけていませんが...。</p>
			<p>気軽に絡んで欲しい、おれは受け身の人間なので...。</p>
		</Typography>
	</Page>
)

export const path = '/'
