import * as React from 'react'
import Routing from './Routing'
import TopBar from './Header'
import Footer from './Footer'
import '../assets/stylesheets/main.css'

class App extends React.Component {
	render() {
		return (
			<Routing>
				<TopBar />
				<Footer>-- ekuinox --</Footer>
			</Routing>
		)
	}
}

export default App
