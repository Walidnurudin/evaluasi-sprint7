import React, {Component} from 'react';
import axios from 'axios';
import Navbar from './navbar';
import './fecth.css';

class Fecth extends Component {
  constructor(props) {
    super(props);
    this.state = {
     	judul: [],
     	loading: true
    };
  }

  handleClick = (i) => {
    this.props.history.push(`/home/${i}`)
  }

  componentDidMount(){

  	axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2F')
  	.then(res => {
  		this.setState({ 
  			judul: res.data.items,
  			loading: false
  		})

  	})
  	.catch(err => {
  		console.log('error :', err)
  	})
  }



  render(){

  	return(
      <div>
        <Navbar />
    		<div className="cont">
    			<ul>
    				{
    					this.state.judul.map((data, i) => {
    						return(
    							<li key={data.pubDate} className="data">
    								<h3 onClick={() => this.handleClick(i)} className="teks"> {data.title} </h3>
    								<br/>
    								<img src={data.thumbnail} alt="gambar berita" />
                    <p className="teks-date">{data.pubDate}</p>
    								<hr/>
    							</li>
    						)
    					})
    				}
    			</ul>
    		</div>
      </div>
  	)
  }
}

export default Fecth;