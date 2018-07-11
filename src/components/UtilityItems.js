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
			<li className="utilities__item">
				<a href={this.props.href} className="utilities__link">
					<img className="utilities__image" src={this.props.picture.file.url} alt={this.props.title}/>
					<span title={this.props.title}>{this.props.title}</span>
				</a>				
			</li>
			);					
	}
}

export default UtilityItems;