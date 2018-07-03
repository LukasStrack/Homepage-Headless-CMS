import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Notfallbox.css";
import classcat from "classcat";

class Notfallbox extends React.Component
{
	static defaultProps = {
		title: "Notfallbox"
	}
	
	render()
	{
			return(
			<div className="Notfallbox">
				<p>{this.props.titel}</p>
				<p>{this.props.beschreibung}</p>
				<p>{this.props.link}</p>
			</div>
			);					
	}
}

export default Notfallbox;