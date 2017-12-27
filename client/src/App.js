import { Route, BrowserRouter as Router } from 'react-router-dom'

import Events from 'pages/events'
import React from 'react'

console.log('hello')
const App = () => (
	<Router>
		<div className="liferay-design-site" key="app">
			<Route composdfnent={Events} path={'/'} />
		</div>sdf
	</Router>
)

export default App
f
