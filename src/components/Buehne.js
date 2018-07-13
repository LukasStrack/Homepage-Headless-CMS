import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Buehne.css";
import classcat from "classcat";

class Buehne extends React.Component
{
	static defaultProps = {
		title: "Buehne"
	}
	
	render()
	{
			return(
			<a 
				href="#"
				className={classcat([{
					"Buehne": true,
					"Buehne--isBig": this.props.isBig === true,
					"Buehne--isTeaserBright": this.props.isTeaserBright === true
				}])}
				style={{backgroundImage: this.props.backgroundImage? "url("+this.props.backgroundImage.file.url+")" : "none"}}
			>
				<div className="Buehne__content">
					<div className="Buehne__textBlock">
						<h2 className="Buehne__headline">{this.props.title}</h2>
						<p className="Buehne__subline">{this.props.description}</p>
					</div>
					<div className="Buehne__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>
			);					
	}
}

export default Buehne;