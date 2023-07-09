import React, { useContext, useEffect } from "react";
import { Context } from '../store/appContext.js';
import People from "../component/People.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { actions, store } = useContext(Context)

	useEffect(() => {
		actions.getDataPeople();
		actions.getDataPlanets();
		actions.getDataVehicles();

	}, []);

	const handleDelete = (index) => {
		actions.deleteFavorite(index);
	};

	return (



		
		<nav className="navbar fixed-top navbar-light bg-light bg-transparent mb-n4 ms-4 mt-4">
			<Link to="/">
				<img src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" width="200" height="100" alt="logo" />
			</Link>
			<div className="ml-auto ">
				<div className="dropstart">
					<button className="btn favorites dropdown-toggle  m-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favorites.length}
					</button>
					<ul className="dropdown-menu mx-auto">
						{
							store.favorites.map((favorite, index) => {

								return (

									<li style={{ color: "rgb(255, 179, 0" }} key={index}><h2>{favorite}
										<box-icon type='solid' class='bx-lg  bx-tada-hover' color="orange" name='trash-alt' onClick={() => handleDelete(index)}
										>
										</box-icon>
										&nbsp;
										<button style={{ fontSize: "24px", color: "rgb(221, 85, 51)", background:"none", border: "none"}} onClick={() => handleDelete(index)}>&#10006;</button>

									</h2>
									</li>
								)
							})
						}
					</ul>
				</div>

			</div>
		</nav>
	);
};








