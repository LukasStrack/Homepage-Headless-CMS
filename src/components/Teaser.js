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
				href={this.props.href}
				className={classcat([{
					"Teaser": true,
					"Teaser--isBig": this.props.isBig === true,
					"Teaser--isTeaserBright": this.props.isTeaserBright === true
				}])}
				style={{backgroundImage: this.props.backgroundImage? "url("+this.props.backgroundImage.file.url+")": "none"}}
			>
				<div className="Teaser__content">
					<div className="Teaser__textBlock">
						<h2 className="Teaser__headline">{this.props.title}</h2>
						<p className="Teaser__subline">{this.props.description}</p>
					</div>
					{
						this.props.stoerer !== null &&
						<aside className="badge__round" style={{background: this.props.stoerer.color}}>
						  <span className="badge_css">
							 {this.props.stoerer.description}
						  </span>
						</aside>
					}
					<div className="Teaser__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>
			);					
	}
}

export default Teaser;