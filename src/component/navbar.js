import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './navbar.css';

class Navbar extends React.Component{

	handleLogout = (e) => {
	    localStorage.removeItem('token');
  	}

  	render(){
  		if(localStorage.getItem('token') == null){
	      return <Redirect to='/' />
	    }

		return (
			<div className="container-navbar">
				<Link to="/home">
					<div className="home">
						Home
					</div>
				</Link>

				<p className="news">News!</p>
				
				<Link to="/">
					<div className="logout" onClick={this.handleLogout}>
						Log out
					</div>
				</Link>
			</div>
		)
	}
}

export default Navbar;