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
				<div className="Notfallbox__headline">{this.props.titel}</div>
				<p className="Notfallbox__description">
					{this.props.beschreibung}
					<br/>
					<a href={this.props.href}>{this.props.link}</a>
				</p>
			</div>
			);					
	}
}

export default Notfallbox;