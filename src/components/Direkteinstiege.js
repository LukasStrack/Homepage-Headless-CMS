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
				<li className="listItem">
					<a className="roundItem" href={this.props.href.href}>
						<span className="svg" dangerouslySetInnerHTML={{ __html: this.props.svg.svg }}></span>
						<span className="label">{this.props.title}</span>
					</a>
				</li>
			);					
	}
}

export default Direkteinstiege;