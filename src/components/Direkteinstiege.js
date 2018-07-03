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
			<div className="Direkteinstiege">
			<ul>
			<li>
				<a>
					<span>{this.props.title}</span>
				</a>				
			</li>
			</ul>
			</div>
			);					
	}
}

export default Direkteinstiege;