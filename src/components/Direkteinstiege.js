import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Direkteinstiege.css";
import classcat from "classcat";

class Direkteinstiege extends React.Component
{
	static defaultProps = {
		title: "Direkteinstiege"
	}
	
	render()
	{
			return(
				<a href={this.props.href.href}>
					<div className="svg" dangerouslySetInnerHTML={{ __html: this.props.svg.svg }}></div>
					<span className="label">{this.props.title}</span>
				</a>
			);					
	}
}

export default Direkteinstiege;