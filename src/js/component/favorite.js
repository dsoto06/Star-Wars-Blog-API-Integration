import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export default function Favorite(props) {
	const { actions } = useContext(Context);

	return (
		<button
			onClick={() => {
				actions.like(props.nameFav);
			}}
			className="btn btn-danger">
			<i className="far fa-heart" />
		</button>
	);
}
Favorite.propTypes = {
	nameFav: PropTypes.string
};
