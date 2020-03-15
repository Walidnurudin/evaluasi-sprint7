import React from 'react';
import axios from 'axios';
import Navbar from './navbar';
import './detail.css';

class Detail extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			data: []
		}
	}


	componentDidMount(){
		const index = this.props.match.params.i;

		axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2F')
		.then(res => {
			this.setState({
				data: res.data.items[index]
			})
		})
	}


	render(){

		const {data} = this.state
		console.log(data)
		return(
			<div>
				<Navbar />
				<div className="detail">
					<h1 className="detail-title">{data.title}</h1>
					<hr/>
					<img src={data.thumbnail} alt="" className="detail-img" />
					<p className="detail-date">{data.pubDate}</p>
					<p className="detail-desc">{data.description}{data.description}</p>
				</div>
			</div>
		)
	}
}

export default Detail;