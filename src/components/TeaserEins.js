import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TeaserEins.css";
import classcat from "classcat";

class TeaserEins extends React.Component
{
	static defaultProps = {
		title: "TeaserEins"
	}
	
	render()
	{
			return(
			<a 
				href="#"
				className={classcat([{
					"TeaserEins": true,
					"TeaserEins--isBig": this.props.isBig === true,
					"TeaserEins--isTeaserBright": this.props.isTeaserBright === true
				}])}
				style={{backgroundImage: this.props.backgroundImage? "url("+this.props.backgroundImage.file.url+")": "none"}}
			>
				<div className="TeaserEins__content">
					<div className="TeaserEins__textBlock">
						<h2 className="TeaserEins__headline">{this.props.title}</h2>
						<p className="TeaserEins__subline">{this.props.description}</p>
							<div className="TeaserEins__bubble">
							{this.props.bubble}
							</div>
					</div>
					<div className="TeaserEins__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>
			);					
	}
}

export default TeaserEins;