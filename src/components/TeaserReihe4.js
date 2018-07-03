import React, { Component } from "react"
import PropTypes from "prop-types"
import "./TeaserReihe4.css"
import classcat from "classcat"

class TeaserReihe4 extends React.Component
{
	static defaultProps = {
		title: "TeaserReihe4"
	}
	
	render()
	{
			return(
			<a 
				href="#"
				className={classcat([{
					"TeaserReihe4": true,
					"TeaserReihe4--isBig": this.props.isBig === true
				}])}
				style={{backgroundImage: this.props.picture? "url("+this.props.picture.file.url+")": "none"}}
			>
				<div className="TeaserReihe4__content">
					<div className="TeaserReihe4__textBlock">
						<h2 className="TeaserReihe4__headline">{this.props.title}</h2>
						<p className="TeaserReihe4__subline">{this.props.description}</p>
							<div className="TeaserReihe4__bubble">
							{this.props.bubble}
							</div>
					</div>
					<div className="TeaserReihe4__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>
			);					
	}
}

export default TeaserReihe4;