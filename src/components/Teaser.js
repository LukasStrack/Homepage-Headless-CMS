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
					"Teaser--isTeaserBright": this.props.isTeaserBright === true,
				}])}
				style={{backgroundImage: this.props.backgroundImage? "url("+this.props.backgroundImage.file.url+")" : "linear-gradient("+this.props.hintergrundFarbe+", "+this.props.hintergrundFarbe+")"}}
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
					{
						this.props.magentaMobilTeaserImage !== null &&
						<img className="magentaMobilTeaserImage" src={this.props.magentaMobilTeaserImage.file.url} />
					}
					{
						this.props.festnetzTeaserImage !== null &&
						<img className="festnetzTeaserImage" src={this.props.festnetzTeaserImage.file.url} />
					}
					{
						this.props.familyCardTeaserImage !== null &&
						<img className="familyCardTeaserImage" src={this.props.familyCardTeaserImage.file.url} />
					}
					{
						this.props.huaweiTeaserImage !== null &&
						<img className="huaweiTeaserImage" src={this.props.huaweiTeaserImage.file.url} />
					}
					<div className="Teaser__link" onClick={this.props.handleClick}>{this.props.button}</div>
				</div>				
			</a>

			);					
	}
}

export default Teaser;