import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About, {path as AboutPath} from './Routes/About'
import Contacts, {path as ContactsPath} from './Routes/Contacts'
import Links, {path as LinksPath} from './Routes/Links'
import Products, {path as ProductsPath} from './Routes/Products'
import Works, {path as WorksPath} from './Routes/Works'
import Likes, {path as LikesPath} from './Routes/Likes'
import NotFound from './Routes/NotFound'

const Routing: React.StatelessComponent<{}> = (props) => (
    <BrowserRouter>
        {props.children}
        <Switch>
            <Route exact path={AboutPath} component={About} />
			<Route path={ContactsPath} component={Contacts} />
			<Route path={LinksPath} component={Links} />
			<Route path={ProductsPath} component={Products} />
			<Route path={WorksPath} component={Works} />
			<Route path={LikesPath} component={Likes} />
			<Route component={NotFound} />
		</Switch>
 	</BrowserRouter>
)

export default Routing
