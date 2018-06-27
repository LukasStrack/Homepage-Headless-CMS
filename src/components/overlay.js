import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Overlay.css";
import classcat from "classcat";

const Overlay = (props) => (
	<div className="Overlay">
		<div className="Overlay__content">
			<div className="Overlay__close" onClick={props.handleCloseClick}>X</div>
			<div className="Overlay__headline">
			{props.headline}
			</div>
			{props.children}
		</div>
	</div>
)

export default Overlay;