import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './component/login';
import Fecth from './component/fecth';
import Detail from './component/detail';
import Nomacth from './component/nomacth';

const Routed = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route exact path='/home' component={Fecth} />
				<Route exact path='/home/:i' component={Detail} />
				<Route component={Nomacth} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routed;