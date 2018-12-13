import React from "react";

const Image = props => (
	<div>
        {
            props.icon && <img src={`http://openweathermap.org/img/w/${props.icon}.png`} className="iconC" alt=""/>
        }
    </div>
);


export default Image;
