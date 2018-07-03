import React, { Component } from "react"
import PropTypes from "prop-types"
import "./TeaserReihe2.css"
import classcat from "classcat"

class TeaserReihe2 extends React.Component
{
	static defaultProps = {
		title: "TeaserReihe2"
	}
	
	render()
	{
			return(
			<a 
				href="#"
				className={classcat([{
					"TeaserReihe2": true,
					"TeaserReihe2--isBig": this.props.isBig === true
				}])}
				style={{backgroundImage: this.props.picture? "url("+this.props.picture.file.url+")": "none"}}
			>
				<div className="TeaserReihe2__content">
					<div className="TeaserReihe2__textBlock">
						<h2 className="TeaserReihe2__headline">{this.props.title}</h2>
						<p className="TeaserReihe2__subline">{this.props.description}</p>
							<div className="TeaserReihe2__bubble">
							{this.props.bubble}
							</div>
					</div>
					<div className="TeaserReihe2__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>
			);					
	}
}

export default TeaserReihe2;