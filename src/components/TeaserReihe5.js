import React, { Component } from "react"
import PropTypes from "prop-types"
import "./TeaserReihe5.css"
import classcat from "classcat"

class TeaserReihe5 extends React.Component
{
	static defaultProps = {
		title: "TeaserReihe5"
	}
	
	render()
	{
			return(
			<a 
				href="#"
				className={classcat([{
					"TeaserReihe5": true,
					"TeaserReihe5--isBig": this.props.isBig === true
				}])}
				style={{backgroundImage: this.props.picture? "url("+this.props.picture.file.url+")": "none"}}
			>
				<div className="TeaserReihe5__content">
					<div className="TeaserReihe5__textBlock">
						<h2 className="TeaserReihe5__headline">{this.props.title}</h2>
						<p className="TeaserReihe5__subline">{this.props.description}</p>
							<div className="TeaserReihe5__bubble">
							{this.props.bubble}
							</div>
					</div>
					<div className="TeaserReihe5__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>
			);					
	}
}

export default TeaserReihe5;