import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const PlanetDetails = () => {

	const { store } = useContext(Context)

	const [imageSource, setImageSource] = useState(`https://starwars-visualguide.com/assets/img/planets/${store.onePlanet.result.uid}.jpg`);

	function handleImageError() {
		// Código para manejar el error de carga de la imagen
		setImageSource("data:image/jpeg;base64,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");
	}


	return (

		<div className="text-center mx-auto ">


			<h1>Planet Details</h1>

			{JSON.stringify(store.onePlanet) !== '{}' ? (
				<div className="card text-start mx-auto"
					style={{ width: "60%" }} key="index">
					<img src={imageSource} onError={handleImageError} className="card-img-top mx-auto mt-2" style={{ height: "18rem", objectFit: "cover", borderRadius: "20px", width: "65%" }} alt="..." />
					<div className="card-body" style={{ height: "13rem", overflowx: "hidden", overflow: "auto" }}>
						<h5 className="card-title">Name: {store.onePlanet.result.properties.name} </h5>

						<div className="row">
							<div className="col-12 mx-auto">
								<h5 className="row ms-1">Description:</h5>
								<p className="col "><i color="orange" className='bx-pull-left bx bx-tada-hover bxs-quote-alt-left bx-lg' />La ópera espacial de George Lucas lleva años inventando lugares para que algunos de nuestros personajes favoritos de todos los tiempos resuelvan sus conflictos a espadazos de luz o con blasters.Algunos de estos planetas y sistemas están en el colectivo imaginario de todos los aficionados de la ciencia ficción y forman parte de muchos de nosotros, pero ¿Cuántos sois capaces de recordar?</p>
								<div className="row">
									<h5 className="col ">Population:</h5>
									<p className="col ">{store.onePlanet.result.properties.population}</p>
									<h5 className="col ">Terrain:</h5>
									<p className="col ">{store.onePlanet.result.properties.terrain}</p>
									<h5 className="col ">Diameter:</h5>
									<p className="col ">{store.onePlanet.result.properties.diameter}</p>
									<h5 className="col ">Orbital period:</h5>
									<p className="col ">{store.onePlanet.result.properties.orbital_period}</p>

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

export default PlanetDetails;