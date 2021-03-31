import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function DetailsButton(props) {
	const [link, setLink] = useState("/details/".concat(props.name.trim()));
	const { store, actions } = useContext(Context);

	return (
		<Link
			to={link}
			className="btn btn-primary"
			onClick={e => {
				actions.setDetails(
					props.name,
					props.char1,
					props.char2,
					props.char3,
					props.char4,
					props.char5,
					props.title1,
					props.title2,
					props.title3,
					props.title4,
					props.title5,
					props.img
				);
			}}>
			Learn more!
		</Link>
	);
}

DetailsButton.propTypes = {
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
