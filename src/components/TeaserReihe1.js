import React, { Component } from "react"
import PropTypes from "prop-types"
import "./TeaserReihe1.css"
import classcat from "classcat"

class TeaserReihe1 extends React.Component
{
	static defaultProps = {
		title: "TeaserReihe1"
	}
	
	render()
	{
			return(
			<a 
				href="#"
				className={classcat([{
					"TeaserReihe1": true,
					"TeaserReihe1--isBig": this.props.isBig === true
				}])}
				style={{backgroundImage: this.props.picture? "url("+this.props.picture.file.url+")": "none"}}
			>
				<div className="TeaserReihe1__content">
					<div className="TeaserReihe1__textBlock">
						<h2 className="TeaserReihe1__headline">{this.props.title}</h2>
						<p className="TeaserReihe1__subline">{this.props.description}</p>
							<div className="TeaserReihe1__bubble">
							{this.props.bubble}
							</div>
					</div>
					<div className="TeaserReihe1__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>
			);					
	}
}

export default TeaserReihe1;