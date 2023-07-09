import React, { useContext, useEffect } from "react";
import People from "../component/People.jsx";
import Planets from "../component/Planets.jsx";
import Vehicles from "../component/Vehicles.jsx";
import { Context } from '../store/appContext.js';


import "../../styles/home.css";

const Home = () => {

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
        <div className="text-center mb-4 mx-auto" style={{marginTop: "8rem"}}>

            <h1>Characters</h1>

            <div className="d-flex lista mb-4">
                {store.char.map((char, index) => (
                    <People
                        key={index}
                        index={index}
                        char={char}
                    />
                ))}
            </div>


            <h1>Planets</h1>
            <div className="d-flex lista mb-4">
                {store.planet.map((planet, index) => (
                    <Planets
                        key={index}
                        index={index}
                        planet={planet}
                    />
                ))}
            </div>

            <h1>Ships</h1>
            <div className="d-flex lista mb-4">
                {store.vehicle.map((vehicle, index) => (
                    <Vehicles
                        key={index}
                        index={index}
                        vehicle={vehicle}
                    />
                ))}
            </div>

        </div>
    );
};

export default Home;