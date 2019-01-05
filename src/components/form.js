import React from 'react';

const Form = (props) => (	
		<form onSubmit={props.weatherMothod}>
			<input type="text" name="city" placeholder="Enter Your City"/>
			<button>Get the weather</button>
		</form>
		);	

export default Form;