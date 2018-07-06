import React, { Component } from "react"
import PropTypes from "prop-types"
import "./TeaserReihe3.css"
import classcat from "classcat"

class TeaserReihe3 extends React.Component
{
	static defaultProps = {
		title: "TeaserReihe3"
	}
	
	render()
	{
			return(
			<a 
				href="#"
				className={classcat([{
					"TeaserReihe3": true,
					"TeaserReihe3--isBig": this.props.isBig === true
				}])}
				style={{backgroundImage: this.props.backgroundImage? "url("+this.props.backgroundImage.file.url+")": "none"}}
			>
				<div className="TeaserReihe3__content">
					<div className="TeaserReihe3__textBlock">
						<h2 className="TeaserReihe3__headline">{this.props.title}</h2>
						<p className="TeaserReihe3__subline">{this.props.description}</p>
							<div className="TeaserReihe3__bubble">
							{this.props.bubble}
							</div>
					</div>
					<div className="TeaserReihe3__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>
			);					
	}
}

export default TeaserReihe3;