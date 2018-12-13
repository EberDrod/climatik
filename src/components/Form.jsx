import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="City..."/>
		<div className="w-100 d-flex"><input type="text" name="country" placeholder="Country..."/></div>
		<button className="btn btn-info mt-3 ml-auto">Get Weather</button>
	</form>
);

export default Form;