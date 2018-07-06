import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Teaser.css";
import classcat from "classcat";

class Teaser extends React.Component
{
	static defaultProps = {
		title: "TeaserTitel"
	}
	
	static propTypes = {	
		title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
		}
	render()
	{
			return(
			<a 
				href="#"
				className={classcat([{
					"Teaser": true,
					"Teaser--isBig": this.props.isBig === true
				}])}
				style={{backgroundImage: this.props.backgroundImage? "url("+this.props.backgroundImage.file.url+")": "none"}}
			>
				<div className="Teaser__content">
					<div className="Teaser__textBlock">
						<h2 className="Teaser__headline">{this.props.title}</h2>
						<p className="Teaser__subline">{this.props.description}</p>
							<div className="Teaser__bubble">
							{this.props.bubble}
							</div>
					</div>
					<div className="Teaser__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>
			);					
	}
}

export default Teaser;