import React, { Component } from 'react'
import Header from '../components/Header'
import Buehne from '../components/Buehne'
import Direkteinstiege from '../components/Direkteinstiege'
import Notfallbox from '../components/Notfallbox'
import Teaser from '../components/Teaser'
import TeaserEins from '../components/TeaserEins'
import TeaserZwei from '../components/TeaserZwei'
import UtilityItems from '../components/UtilityItems'
import Footer from '../components/Footer'
import "./index.css"	


class index extends React.Component
{
	render()
	{
	console.log(this.props.data);
		return(
			<div>
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
			{
				<Buehne
					handleClick = {
						(event)=>{this.setState({
							isOverlayOpen: true,
							overlayHeadline: this.props.data.contentfulBuehne.buehne.title,
							overlayContent: this.props.data.contentfulBuehne.buehne.description
							})}
						}
						bubble = {
							<p>Hello World</p>
						}
					{
						...this.props.data.contentfulBuehne.buehne	
					}
				></Buehne>
			}
			</div>
			<div className="Direkteinstiege">
			{
				<nav className="nav">
					<ul className="list">
						{
						this.props.data.contentfulDirekteinstiege.direkteinstieg.map((direkteinstieg, index) => (
							<div className="round_dark">
								<Direkteinstiege
									{
										...direkteinstieg
									}
								></Direkteinstiege>
							</div>
						))
						}
					</ul>
				</nav>
			}
			</div>
			<div>
			{
				this.props.data.contentfulNotfallbox.isNotfallboxActive === true &&
				<Notfallbox
					{
						...this.props.data.contentfulNotfallbox	
					}
				></Notfallbox>
			}
			</div>
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
			{
				<TeaserEins
						bubble = {
							<p>Hello World</p>
						}
					{
						...this.props.data.contentfulTeaserEins.teaserEins
					}
				></TeaserEins>
			}
			{
				<TeaserZwei
						bubble = {
							<p>Hello World</p>
						}
					{
						...this.props.data.contentfulTeaserZwei.teaserZwei
					}
				></TeaserZwei>
			}
			</div>
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
			{
				this.props.data.contentfulTeaserReihe15.teaser.map((teaser, index) => (
				<Teaser
					handleClick = {
						(event)=>{this.setState({
							isOverlayOpen: true,
							overlayHeadline: teaser.title,
							overlayContent: teaser.description
							})}
						}
						bubble = {
							<p>Hello World</p>
						}
					{
						...teaser
					}
				></Teaser>
				))
			}
			</div>
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
				<ul className="utilities">
				{
				this.props.data.contentfulUtilityContainer.utilityItems.map((utilityItem, index) => (
					<UtilityItems
						{
							...utilityItem
						}
					></UtilityItems>
				))
				}
				</ul>
			</div>
			</div>
		);	
	}
}

export default index;

export const homepageQuery = graphql 
	`query homepageQuery {
	  contentfulBuehne {
		buehne {
		  title
		  description
		  button
		  href
		  isBig
		  backgroundImage {
			file {
			  url
			}
		  }
		}
	  }
	  contentfulDirekteinstiege {
		direkteinstieg {
		  svg {
		    svg
		  }
		  title
		  href{
			href
		  }
		}
	  }
	  contentfulNotfallbox {
		titel
		beschreibung
		link
		href
		isNotfallboxActive
	  }
	  contentfulTeaserReihe15 {
		teaser {
		  title
		  description
		  button
		  href
		  isBig
		  isTeaserBright
		  stoerer {
			description
			color
			legalNote {
			  title
			}
		  }
		  backgroundImage {
			file {
			  url
			}
		  }
		}
	  }
	  contentfulTeaserEins {
		teaserEins {
		  title
		  description
		  button
		  href
		  isBig
		  isTeaserBright
		  backgroundImage {
			file {
			  url
			}
		  }
		}
	  }
	  contentfulTeaserZwei {
		teaserZwei {
		  title
		  description
		  button
		  href
		  isBig
		  isTeaserBright
		  backgroundImage {
			file {
			  url
			}
		  }
		}
	  }
	  contentfulUtilityContainer {
		utilityItems {
		  picture {
			file {
			  url
			}
		  }
		  title
		  href
		}
	  }
	  contentfulStorer {
		description
		color
	  }
	}`;