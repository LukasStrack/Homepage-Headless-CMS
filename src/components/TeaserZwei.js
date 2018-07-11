import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TeaserZwei.css";
import classcat from "classcat";

class TeaserZwei extends React.Component
{
	static defaultProps = {
		title: "TeaserZwei"
	}
	
	render()
	{
			return(
			<a 
				href="#"
				className={classcat([{
					"TeaserZwei": true,
					"TeaserZwei--isBig": this.props.isBig === true,
					"TeaserZwei--isTeaserBright": this.props.isTeaserBright === true
				}])}
				style={{backgroundImage: this.props.backgroundImage? "url("+this.props.backgroundImage.file.url+")": "none"}}
			>
				<div className="TeaserZwei__content">
					<div className="TeaserZwei__textBlock">
						<h2 className="TeaserZwei__headline">{this.props.title}</h2>
						<p className="TeaserZwei__subline">{this.props.description}</p>
							<div className="TeaserZwei__bubble">
							{this.props.bubble}
							</div>
					</div>
					<div className="TeaserZwei__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>
			);					
	}
}

export default TeaserZwei;