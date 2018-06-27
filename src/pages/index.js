import React, { Component } from 'react';
import Teaser from '../components/Teaser';
import Overlay from '../components/Overlay'
import "./index.css";	


class index extends React.Component
{
	state = {
		isOverlayOpen: false,
		overlayHeadline: "",
		overlayContent: ""
	}
	render()
	{
		console.log(this.props);
		return(
			<div>	
			<h1>{this.props.data.contentfulPage.headline}</h1>
			
			{
				this.state.isOverlayOpen === true && 
			
			<Overlay 
				headline={this.state.overlayHeadline}
				handleCloseClick = {
					(event)=>{this.setState({isOverlayOpen: false})}
				}
			>{this.state.overlayContent}</Overlay>
			}
			
			<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
			{
				this.props.data.contentfulPage.teasers.map((teaser, index) => (
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
			</div>
		);	
	}
}

export default index;

export const pageQuery = graphql 
	`query teaserQuery{
		contentfulPage(headline: {eq:"Startseite"})
		  {
			headline
			contentful_id
			id
			teasers 
			{
			  id
			  title
			  description
			  button
			  isBig
			  picture {
				file{
				  url
				}
			  }
			}
		  }
	}`;