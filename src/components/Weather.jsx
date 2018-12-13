import React from "react";

const Weather = props => (
	<div className="w-100 card-header">
		<div className="row">
			{
				props.wind && <div className="col-sm-4 text-center">
					<div className="row">
						<div className="col-1 ml-auto px-0"><i className="fas fa-wind text-white fa-2x"></i> </div>
						<div className="col-8 mr-auto">
							<span className="text-white ml-2">{props.wind} m/s</span>
							<div className="w-100"></div>
							<span className="text-white">Wind</span>
						</div>
					</div>
				</div>
			}
			{
				props.humidity && <div className="col-sm-4 text-center">
					<div className="row">
						<div className="col-1 ml-auto px-0"> <i className="fas fa-tint text-white fa-2x"></i> </div>
						<div className="col-8 mr-auto">
							<span className="text-white ml-2">{props.humidity}</span>
							<div className="w-100"></div>
							<span className="text-white">Humidity</span>
						</div>
					</div>
				</div>
			}
			{
				props.sunrise && <div className="col-sm-4 text-center">
					<div className="row">
						<div className="col-1 ml-auto px-0"><i className="far fa-sun text-white fa-2x"></i> </div>
						<div className="col-8 mr-auto">
							<span className="text-white ml-2">{props.sunrise}</span>
							<div className="w-100"></div>
							<span className="text-white">Sunrise</span>
						</div>
					</div>
				</div>
			}
		</div>
	</div>
);


export default Weather;
