import React, { Component } from 'react'
import Header from '../components/Header'
import Buehne from '../components/Buehne'
import Direkteinstiege from '../components/Direkteinstiege'
import Notfallbox from '../components/Notfallbox'
import TeaserReihe1 from '../components/TeaserReihe1'
import TeaserReihe2 from '../components/TeaserReihe2'
import TeaserReihe3 from '../components/TeaserReihe3'
import TeaserReihe4 from '../components/TeaserReihe4'
import TeaserReihe5 from '../components/TeaserReihe5'
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
						<li>
							<div className="round_dark">
								<Direkteinstiege
									{
										...direkteinstieg
									}
								></Direkteinstiege>
							</div>
						</li>
						))
						}
					</ul>
				</nav>
			}
			</div>
			<div>
			{
				this.props.data.contentfulNotfallbox.isNotfallboxActive === true &&
				<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
				{
					<Notfallbox
						{
							...this.props.data.contentfulNotfallbox	
						}
					></Notfallbox>
				}
				</div>
			}
			</div>
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
			{
				this.props.data.contentfulTeaserReihe1.teaserReihe1.map((teaser, index) => (
				<TeaserReihe1
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
				></TeaserReihe1>
				))
			}
			</div>
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
			{
				this.props.data.contentfulTeaserReihe2.teaserReihe2.map((teaser, index) => (
				<TeaserReihe2
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
				></TeaserReihe2>
				))
			}
			</div>
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
			{	
				this.props.data.contentfulTeaserReihe3.teaserReihe3.map((teaser, index) => (
				<TeaserReihe3
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
				></TeaserReihe3>
				))
			}
			</div>
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
			{
				this.props.data.contentfulTeaserReihe4.teaserReihe4.map((teaser, index) => (
				<TeaserReihe4
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
				></TeaserReihe4>
				))
			}
			</div>
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
			{
				this.props.data.contentfulTeaserReihe5.teaserReihe5.map((teaser, index) => (
				<TeaserReihe5
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
				></TeaserReihe5>
				))
			}
			</div>
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
			{
				this.props.data.contentfulUtilityContainer.utilityItems.map((utilityItem, index) => (
				<UtilityItems
					{
						...utilityItem
					}
				></UtilityItems>
				))
			}
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
	  contentfulTeaserReihe1 {
		teaserReihe1 {
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
	  contentfulTeaserReihe2 {
		teaserReihe2 {
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
	  contentfulTeaserReihe3 {
		teaserReihe3 {
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
	  contentfulTeaserReihe4 {
		teaserReihe4 {
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
	  contentfulTeaserReihe5 {
		teaserReihe5 {
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
	}`;