import * as React from 'react'
import { UL, LI } from '../PageList'
import Page from '../Page'

export default () => (
	<Page title="Products">
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
	</Page>
)

export const path = '/products'
