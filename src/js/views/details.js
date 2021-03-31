import React, { Fragment, useContext } from "react";
import { Context } from "../store/appContext.js";

export default function Details() {
	const { store } = useContext(Context);

	return (
		<div className="container-fluid details h-100">
			<div className="container bg-white mt-4 p-3 pt-4">
				<div className="card mb-3 d-flex align-items-baseline">
					<div className="row no-gutters ">
						<div className="col-md-4">
							<img src={store.img} className="card-img photo" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h2 className="card-title text-center">{store.name}</h2>
								<p className="card-text mt-5 text-center">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor
									scelerisque sapien vitae finibus. Vivamus commodo orci tincidunt suscipit
									consectetur. Vivamus ultricies sem quis nulla ornare, sit amet molestie purus
									eleifend. Donec eget erat aliquam sem feugiat ultricies ac quis velit. Aenean congue
									diam eget bibendum consequat. Mauris est ligula, rutrum at velit vitae, posuere
									mollis lacus. Vestibulum non finibus lectus, vitae sagittis justo. Etiam iaculis
									metus eget sapien auctor, quis aliquam velit consectetur. Nulla tempor euismod
									suscipit. Proin dignissim sapien at elit mollis, in laoreet lorem aliquet.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-3">
				<div className="row border-bottom border-danger d-flex justify-content-center">
					<h3 className="text-danger">
						<strong>Data</strong>
					</h3>
				</div>
				<div className="row d-flex justify-content-between">
					{store.details.map((detail, index) => {
						return (
							<div className="col-2 p-1 mt-3" key={index}>
								<h5 className="text-danger text-center">
									<strong>{detail.title}</strong>
								</h5>
								<h5 className="text-danger text-center">{detail.char}</h5>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
