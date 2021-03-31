import React from "react";
import PropTypes from "prop-types";
import Favorite from "./favorite.js";
import { Context } from "../store/appContext.js";
import DetailsButton from "./details.js";

export default function Card(props) {
	return (
		<div className="card col-3 mx-3">
			<img className="card-img-top mt-3" src={props.img} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-danger">{props.name}</h5>
				<p className="card-text">
					{props.title1}: {props.char1} <br />
					{props.title2}: {props.char2} <br /> {props.title3}: {props.char3}
				</p>
				<div className="d-flex justify-content-between">
					<DetailsButton
						name={props.name}
						char1={props.char1}
						char2={props.char2}
						char3={props.char3}
						char4={props.char4}
						char5={props.char5}
						title1={props.title1}
						title2={props.title2}
						title3={props.title3}
						title4={props.title4}
						title5={props.title5}
						img={props.img}
					/>
					<Favorite nameFav={props.name} />
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	char1: PropTypes.string,
	char2: PropTypes.string,
	char3: PropTypes.string,
	char4: PropTypes.string,
	char5: PropTypes.string,
	title1: PropTypes.string,
	title2: PropTypes.string,
	title3: PropTypes.string,
	title4: PropTypes.string,
	title5: PropTypes.string,
	img: PropTypes.string
};
