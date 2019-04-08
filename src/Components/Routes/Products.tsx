import * as React from 'react'
import PageTitle from '../PageTitle'
import { UL, LI } from '../PageList'

export default () => (
	<div>
		<PageTitle title="Products" />
		<UL>
			<LI>
				<a href="https://github.com/ekuinox/Fogo" target="_new">ekuinox/Fogo</a>
				<br/>C++でゲームプログラム用にライブラリを自作しておるが、稚拙極まりないので良かったら優しく批評していただきたい。
			</LI>
			<LI>
				<a href="https://github.com/ekuinox/Khaos" target="_new">ekuinox/Khaos</a>
				<br/>SpigotでDigAllをやるプラグインをKotlinで書いています。
			</LI>
		</UL>
	</div>
)

export const path = '/products'
