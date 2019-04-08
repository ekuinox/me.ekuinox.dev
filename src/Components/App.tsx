import * as React from 'react'
import Routing from './Routing'
import TopBar from './TopBar'
import Footer from './Footer'

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
