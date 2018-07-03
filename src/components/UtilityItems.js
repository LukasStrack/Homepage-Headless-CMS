import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UtilityItems.css";
import classcat from "classcat";

class UtilityItems extends React.Component
{
	static defaultProps = {
		title: "UtilityItems"
	}
	
	render()
	{
			return(
			<div className="UtilityItems">
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

export default UtilityItems;