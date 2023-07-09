import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const VehicleDetails = () => {

	const { store } = useContext(Context)


	const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/starships/${store.oneVehicle.result.uid}.jpg`);


	function handleImageError() {
		// Código para manejar el error de carga de la imagen
		setImageSource("data:image/jpeg;base64,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");
	}



	return (

		<div className="text-center mx-auto ">


			<h1>StarShip Details</h1>

			{JSON.stringify(store.oneVehicle) !== '{}' ? (
				<div className="card text-start mx-auto"
					style={{ width: "60%" }} key="index">
					<img src={imageSource} onError={handleImageError} className="card-img-top mx-auto mt-2" style={{ height: "18rem", objectFit: "cover", borderRadius: "20px", width: "65%" }} alt="..." />
					<div className="card-body mx-auto" style={{ height: "16rem", overflowx: "hidden", overflow: "auto", width: "80%" }}>
						<h5 className="card-title">Name: {store.oneVehicle.result.properties.name} </h5>

						<div className="row">
							<div className="col-12 mx-auto">
								<h5 className="row ms-1 ">Description:</h5>
								<p className="col "><i color="orange" className='bx-pull-left bx bx-tada-hover bxs-quote-alt-left bx-lg' /> El Universo Star Wars nos ha traído en sus películas y series algunas de las mejores naves de la ciencia ficción. Desde 1977, George Lucas ya trajo muchas de las más representativas y muchas han ido evolucionando a lo largo de las películas.</p>
								<div className="row">
									<h5 className="col ">Model:</h5>
									<p className="col ">{store.oneVehicle.result.properties.model}</p>
									<h5 className="col ">Manufacturer:</h5>
									<p className="col ">{store.oneVehicle.result.properties.manufacturer}</p>
									<h5 className="col ">Passengers:</h5>
									<p className="col ">{store.oneVehicle.result.properties.passengers}</p>
									<h5 className="col ">Max speed:</h5>
									<p className="col ">{store.oneVehicle.result.properties.max_atmosphering_speed}</p>
									<h5 className="col ">Class:</h5>
									<p className="col ">{store.oneVehicle.result.properties.starship_class}</p>
								</div>
							</div>



						</div>
					</div>




					<Link to="/home" className="backdetails btn m-3">Back to Home</Link>

				</div>
			) : (
				<h1>No only one selected</h1>
			)}
		</div>
	)


};

export default VehicleDetails;