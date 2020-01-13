import * as React from 'react'
import PageTitle from '../PageTitle'
import { Typography } from '@material-ui/core'
import PageBody from '../Page'
import { UL, LI } from '../PageList'

export default () => (
	<PageBody title="Works">
		<Typography style={{
			fontSize: '2vh',
			marginLeft: '1vh',
			marginTop: '1vh'
			}}
		>
			私が作ったものとか
		</Typography>
		<UL>
			<LI>
				<a href="https://github.com/ekuinox/Fogo" target="_new">ekuinox/Fogo</a>
				<br/>C++でゲームプログラム用にライブラリを自作しておるが、稚拙極まりないので良かったら優しく批評していただきたい。
				<br/><a href="https://ekuinox.qrunch.io/entries/XpXMKec5us4tZIZT">ゲームプログラム向けのフレームワークを自作している話</a>をQrunchに投稿しました。
			</LI>
			<LI>
				<a href="https://github.com/ekuinox/Khaos" target="_new">ekuinox/Khaos</a>
				<br/>SpigotでDigAllをやるプラグインをKotlinで書いています。
			</LI>
		</UL>
	</PageBody>
)

export const path = '/works'
