import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Teaser.css";
import "./HighspeedInternet.css";
import "./HuaweiAktion.css";
import "./EntertainTV.css";
import "./MagentaSmarthome.css";
import "./Hundetracker.css";
import "./MagentaMobil.css";
import "./Festnetz.css";
import "./TerminVereinbarung.css";
import "./FamilyCard.css";
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
					"Teaser--buttonColor": this.props.buttonColor === true,
					"HignspeedInternet": this.props.tieserTyp === "HighspeedInternet",
					"HuaweiAktion": this.props.tieserTyp === "HuaweiAktion",
					"EntertainTV": this.props.tieserTyp === "Entertain TV",
					"MagentaSmarthome": this.props.tieserTyp === "MagentaSmarthome",
					"Hundetracker": this.props.tieserTyp === "Hundetracker",
					"MagentaMobil": this.props.tieserTyp === "MagentaMobil",
					"Festnetz": this.props.tieserTyp === "Festnetz",
					"TerminVereinbarung": this.props.tieserTyp === "TerminVereinbarung",
					"FamilyCard": this.props.tieserTyp === "FamilyCard"
				}])}
				style={{backgroundImage: this.props.backgroundImage? "url("+this.props.backgroundImage.file.url+")" : "none"}}
			>
				{/* Spezieller Teaser */}
				{
					this.props.tieserTyp !== null &&
					<div className={this.props.tieserTyp + "__content"}>
						<div className={this.props.tieserTyp + "__textBlock"}>
							<h2 className={this.props.tieserTyp + "__headline"}>{this.props.title}</h2>
							<p className={this.props.tieserTyp + "__subline"}>{this.props.description}</p>
						</div>
						{
							this.props.inputField !== null &&
							<form className={this.props.tieserTyp + "__form"} method="get" action={this.props.inputField.href} target="_blank">
							  <label className={this.props.tieserTyp + "__form__label-address"} htmlFor={this.props.inputField.inputId}>
								  <input id={this.props.inputField.inputId} className={this.props.tieserTyp + "__form__input-address"} type="text" name="address" placeholder={this.props.inputField.placeholder}/>
							  </label>
							  <button className={this.props.tieserTyp +  "__form__button-submit"} type="submit" data-tealium-rel="content" style={{cursor: "pointer"}}></button>
							</form>
						}
						{
						this.props.contentImage !== null &&
						<img className={this.props.tieserTyp + "__contentImage"} src={this.props.contentImage.file.url} />
						}
						{
						this.props.stoerer !== null &&
						<aside className={this.props.tieserTyp + "__badge__round"} style={{background: this.props.stoerer.color}}>
						  <span className={this.props.tieserTyp + "__badge_css"}>
							 {this.props.stoerer.description}
						  </span>
						</aside>
						}
						{this.props.inputField ? (
							<a className={this.props.tieserTyp + "__link"} href={this.props.inputField.href} style={{textDecorationLine: "none"}}>{this.props.button}</a>
						  ) : (
							<div className={this.props.tieserTyp + "__link"} onClick={this.props.handleClick}>{this.props.button}</div>
						  )}
					</div>
				}
				{/* Default Teaser */}
				{
					this.props.tieserTyp == null &&
					<div className="Teaser__content">
						<div className="Teaser__textBlock">
							<h2 className="Teaser__headline">{this.props.title}</h2>
							<p className="Teaser__subline">{this.props.description}</p>
						</div>
						{
							this.props.contentImage !== null &&
							<img className="Teaser__contentImage" src={this.props.contentImage.file.url} />
						}
						{
							this.props.stoerer !== null &&
							<aside className="Teaser__badge__round" style={{background: this.props.stoerer.color}}>
							  <span className="Teaser__badge_css">
								 {this.props.stoerer.description}
							  </span>
							</aside>
						}
						<div className="Teaser__link" onClick={this.props.handleClick}>{this.props.button}</div>
					</div>
				}				
			</a>
			);					
	}
}

export default Teaser;