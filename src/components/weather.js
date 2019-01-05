import React from 'react';

class Weather extends React.Component {
	render(){
		return (
			<div>
				{ this.props.city &&	
					<div>
						<p>Your place: {this.props.city}, {this.props.country}</p>
						<p>Temperature: {this.props.temp}</p>
						<p>Pressure: {this.props.pressure}</p>
						<p>Senset: {this.props.sunset}</p>
					</div>
				}
			</div>
		);	
	}
}

export default Weather;