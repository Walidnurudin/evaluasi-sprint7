import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './login.css';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: '',
			token: ''
		}
	}

	handleChange = (e) => {
		this.setState({ [e.target.name] : e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault();

		const dataInput = {
			username: this.state.username,
			password: this.state.password
		}

		axios.post('https://penjualanapp-api.herokuapp.com/api/v1/auth/login', dataInput)
		.then(res => {
			this.setState({ token: res.data.data.token })
			localStorage.setItem('token', res.data.data.token)
		})
		.catch(err => console.log(err))
	}



	render(){
		if(localStorage.getItem('token')){
			return <Redirect to='/home' />
		}

		return(
			<div className='container'>
				<div className='form'>
					<form onSubmit={this.handleSubmit}>
						<label className='teks-login'>Username :</label>
						<input
							name='username'
							type='text'
							onChange={this.handleChange}
							value={this.state.username}
						/>
						<br/>
						<label className='teks-login'>Password :</label>
						<input
							name='password'
							type='password'
							onChange={this.handleChange}
							value={this.state.password}
						/>
						<br/>

						<button type='submit'>Login</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Login;