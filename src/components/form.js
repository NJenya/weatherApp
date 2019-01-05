import React from 'react';

class Form extends React.Component {
	render(){
		return (
				<form onSubmit={this.props.weatherMothod}>
					<input type="text" name="city" placeholder="Enter Your City"/>
					<button>Get the weather</button>
				</form>
		);	
	}
}

export default Form;