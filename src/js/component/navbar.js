import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex row justify-content-between align-items-center border border-bottom bg-light">
			<Link to="/">
				<img
					className="mx-5 my-3"
					src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-600x338.png"
					alt="starWars"
					width="150"
					height="70"
				/>
			</Link>
			<Dropdown className="mx-5 my-3">
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favorites.map((variable, index) => {
						return (
							<Dropdown.Item key={index} toggle={false} className="d-flex justify-content-between">
								{variable}
								<i
									onClick={() => {
										actions.deleteLike(variable);
									}}
									className="fas fa-trash ml-3"
								/>
							</Dropdown.Item>
						);
					})}
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};
