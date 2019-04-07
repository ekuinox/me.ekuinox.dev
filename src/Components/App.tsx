import * as React from 'react'
import Routing from './Routing'
import TopBar from './TopBar'

class App extends React.Component {
	render() {
		return (
			<Routing>
				<TopBar />
			</Routing>
		)
	}
}

export default App
