import React from "react";
import CardRow from "../component/cardRow.js";
import "../../styles/home.scss";
import { Footer } from "../component/footer.js";

export const Home = () => (
	<div className="container-fluid">
		<CardRow title="Characters" />
		<CardRow title="Planets" />
		<Footer />
	</div>
);
