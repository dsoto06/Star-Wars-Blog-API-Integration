import React, { Fragment, useContext, useState } from "react";
import PropTypes from "prop-types";
import Card from "./card.js";
import { Context } from "../store/appContext.js";

export default function CardRow(props) {
	const { store } = useContext(Context);
	let [limitPlanet, setPlanet] = useState(10);
	let [limitPeople, setPeople] = useState(10);
	if (props.title == "Characters") {
		return (
			<Fragment>
				<div className="container py-4">
					<h1 className="text-danger">
						<strong>{props.title}</strong>
					</h1>
				</div>
				<div className="container bg-white">
					<div className="row p-3 box d-flex flex-nowrap d-flex align-items-center">
						{store.people.map((person, index) => {
							if (index < limitPeople) {
								return (
									<Card
										key={index}
										name={person.name}
										title1="Eye Color"
										title2="Mass"
										title3="Gender"
										title4="Skin Color"
										title5="Birth Year"
										char1={person.eye_color}
										char2={person.mass}
										char3={person.gender}
										char4={person.skin_color}
										char5={person.birth_year}
										img="https://cdn.pixabay.com/photo/2017/05/08/19/07/stormtrooper-2296199_960_720.jpg"
									/>
								);
							}
						})}
					</div>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<div className="container py-4">
					<h1 className="text-danger">
						<strong>{props.title}</strong>
					</h1>
				</div>
				<div className="container bg-white">
					<div className="row p-3 box d-flex flex-nowrap d-flex">
						{store.planets.map((planet, index) => {
							if (index < limitPlanet) {
								return (
									<Card
										key={index}
										name={planet.name}
										title1="Terrain"
										title2="Population"
										title3="Diameter"
										title4="Orbital Period"
										title5="Climate"
										char1={planet.terrain}
										char2={planet.population}
										char3={planet.diameter}
										char4={planet.orbital_period}
										char5={planet.climate}
										img="https://cdn.pixabay.com/photo/2018/10/07/10/42/sahara-3729651_960_720.jpg"
									/>
								);
							}
						})}
					</div>
				</div>
			</Fragment>
		);
	}
}

CardRow.propTypes = {
	title: PropTypes.string
};
