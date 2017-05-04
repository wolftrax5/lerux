import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render(){
		return(
				<div className="main">
					<h1>
						<Link to="/">Hola prro!</Link>
					</h1>
				</div>
			)
	}
})

export default Main;
