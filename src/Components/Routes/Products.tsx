import * as React from 'react'
import PageTitle from '../PageTitle'

export default () => (
	<div>
		<PageTitle title="Products" />
		<ul>
			<li>
				<a href="https://github.com/ekuinox/Fogo" target="_new">ekuinox/Fogo</a>
				<br/>C++でゲームプログラム用にライブラリを自作しておるが、稚拙極まりないので良かったら優しく批評していただきたい。
			</li>
			<li>
				<a href="https://github.com/ekuinox/Khaos" target="_new">ekuinox/Khaos</a>
				<br/>SpigotでDigAllをやるプラグインをKotlinで書いています。
			</li>
		</ul>
	</div>
)

export const path = '/products'
