import * as React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
    			<div>
					<h1>ハロー</h1>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/contacts">Contacts</Link></li>
						<li><Link to="/links">Links</Link></li>
						<li><Link to="/products">Products</Link></li>
						<li><Link to="/works">Works</Link></li>
						<li><Link to="/likes">Likes</Link></li>
					</ul>

      				<Route exact path='/' component={About} />
      				<Route path='/contacts' component={Contacts} />
      				<Route path='/links' component={Links} />
      				<Route path='/products' component={Products} />
      				<Route path='/works' component={Works} />
      				<Route path='/likes' component={Likes} />
    				</div>
 			</BrowserRouter>
		)
	}
}

const About = () => (
	<div>
		<h2>About me</h2>
		<p>lm0xとかekuinoxとか名乗る．漫画と音楽が好き．</p>
	</div>
)

const Contacts = () => (
	<div>
		<h2>Contacts</h2>
		<ul>
			<li><a href="https://twitter.com/ekuinox" target="_new">Twitter</a></li>
			<li><a href="https://github.com/ekuinox" target="_new">GitHub</a></li>
			<li><a href="https://mstdn.club/@lm0x" target="_new">Mastodon(mstdn.club)</a></li>
			<li><a href="https://keybase.io/lm0x" target="_new">Keybase</a></li>
			<li>Discord: ekuinox#1378</li>
			<li><a href="mailto:eku@lmx.pw">eku@lmx.pw</a></li>
		</ul>
	</div>
)

const Links = () => (
	<div>
		<h2>Links</h2>
		<ul>
			<li><a href="https://blog.feelingso.blue" target="_new">れもくすブログ（ｎ代目）</a></li>
			<li><a href="https://bookmeter.com/users/778480" target="_new">読書メーター</a></li>
			<li><a href="https://itunes.apple.com/profile/lm0x" target="_new">AppleMusic</a></li>
			<li><a href="http://animetick.net/users/6lmx" target="_new">Animetick</a></li>
			<li><a href="https://steamcommunity.com/id/lm0x" target="_new">Steam</a></li>
			<li><a href="http://amzn.asia/0KSla0Y" target="_new">Amazon Wishlist</a></li>
			<li><a href="https://soundcloud.com/lm0x/likes" target="_new">SoundCloud likes</a></li>
		</ul>
	</div>
)

const Products = () => (
	<div>
		<h2>Products</h2>
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

const Works = () => (
	<div>
		<h2>Works</h2>
		<p>職を探しております。ご連絡お待ちしております。</p>
	</div>
)

const Likes = () => (
	<div>
		<h2>Likes</h2>
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

export default App
