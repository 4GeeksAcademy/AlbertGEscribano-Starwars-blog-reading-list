const API_URL = "https://albertgescribano-scaling-telegram-7qgr94rrrr636pr-3000.preview.app.github.dev"
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			people: [],
			planets: [],
			vehicles: [],
			char: [],
			planet: [],
			vehicle: [],
			favorites: [],
			oneChar: {},
			oneVehicle: {},
			onePlanet: {},
			auth: false,

		},
		actions: {


			getLogIn: async (userEmail, userPassword) => {
				try {
					const response = await fetch(
						API_URL + "/login",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
							},
							body: JSON.stringify({
								email: userEmail,
								password: userPassword,
							}),
						}
					);

					if (response.ok) {
						const data = await response.json();
						console.log(data.access_token)
						localStorage.setItem("myToken", data.access_token);
						setStore({ auth: true })
						return true;
					} else if (response.status === 401) {
						// Handle non-authorised connection error
						return false;
					}
				} catch (err) {
					console.log(err);
					return false; // Handle the other errors, resend false by default
				}
			},

			// SignUp function
			getSignUp: async (userEmail, userPassword) => {
				try {
					let myToken = localStorage.getItem("myToken"); // Utiliser la clé "myToken" au lieu de "token"
					const response = await fetch(
						API_URL + "/signup",
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json",
								Authorization: `Bearer ${myToken}`, // Utiliser le préfixe "Bearer" pour l'autorisation
							},
							body: JSON.stringify({
								email: userEmail,
								password: userPassword,
							}),
						}
					);

					if (response.ok) {
						return true
						// console.log("Todo perfecto");
					} else if (response.status === 401) {
						// Gérer l'erreur de connexion non autorisée
						return false;
					}
				} catch (err) {
					console.log(err);
					return false; // Gérer les autres erreurs, renvoyer false par défaut
				}
			},

			getLogOut: () => {
				localStorage.removeItem("myToken");
				setStore({ auth: false })
			},

			isAuth: async () => {
				try {
					let token = localStorage.getItem("myToken");
					console.log(token)
					const settings = {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token,
						},
					};

					const request = await fetch(API_URL + "/private", settings);
					console.log(request)

					if (request.ok) {
						const json = await request.json();
						const data = json;
						console.log(data)
						setStore({ user: data.user });
						setStore({ auth: true })

					}


				} catch (error) {
					console.log("No se pudo cargar: ", error);
				}
			},

			getDataPeople: async () => {
				try {
					const store = getStore()
					const result = await fetch("https://www.swapi.tech/api/people?page=1&limit=20")
					const data = await result.json()

					setStore({ ...store, people: data.results })
					console.log("API respondió bien con primera lista de url", data)
					const actions = getActions()
					await actions.mappingFetch()
				} catch (error) {
					console.log("No se pudo recuperar lista de urls ", error)
				}
			},

			mappingFetch: async () => {
				try {
					const { getDataPeopleDescription } = getActions()
					const store = getStore()
					const pedidos = await store.people.map((e) => getDataPeopleDescription(e.url))
					await Promise.all(pedidos);
				} catch (error) {
					console.log(" ", error)
				}
			},

			getDataPeopleDescription: async (url) => {
				try {

					const store = getStore();
					const result = await fetch(url)
					const data = await result.json()
					setStore({ ...store, char: [...store.char, data] });
					console.log("API respondió bien con obj personas", data)
				} catch (error) {
					console.log("No se pudo recuperar obj personas ", error)
				}
			},


			getDataPlanets: async () => {
				try {
					const store = getStore()
					const result = await fetch("https://www.swapi.tech/api/planets?page=1&limit=20")
					const data = await result.json()

					setStore({ ...store, planets: data.results })
					console.log("API respondió bien con primera lista de url", data)
					const { mappingFetchPlanets } = getActions()
					await mappingFetchPlanets()
				} catch (error) {
					console.log("No se pudo recuperar lista de urls ", error)
				}
			},

			mappingFetchPlanets: async () => {
				try {
					const { getDataPlanetsDescription } = getActions()
					const store = getStore()
					const pedidos = await store.planets.map((e) => getDataPlanetsDescription(e.url))
					await Promise.all(pedidos);
				} catch (error) {
					console.log(" ", error)
				}
			},

			getDataPlanetsDescription: async (url) => {
				try {

					const store = getStore();
					const result = await fetch(url)
					const data = await result.json()
					setStore({ ...store, planet: [...store.planet, data] });
					console.log("API respondió bien con obj personas", data)
				} catch (error) {
					console.log("No se pudo recuperar obj personas ", error)
				}
			},


			getDataVehicles: async () => {
				try {
					const store = getStore()
					const result = await fetch("https://www.swapi.tech/api/starships?page=1&limit=20")
					const data = await result.json()

					setStore({ ...store, vehicles: data.results })
					console.log("API respondió bien con primera lista de url", data)
					const { mappingFetchVehicles } = getActions()
					await mappingFetchVehicles()
				} catch (error) {
					console.log("No se pudo recuperar lista de urls ", error)
				}
			},

			mappingFetchVehicles: async () => {
				try {
					const { getDataVehiclesDescription } = getActions()
					const store = getStore()
					const pedidos = await store.vehicles.map((e) => getDataVehiclesDescription(e.url))
					await Promise.all(pedidos);
				} catch (error) {
					console.log(" ", error)
				}
			},

			getDataVehiclesDescription: async (url) => {
				try {

					const store = getStore();
					const result = await fetch(url)
					const data = await result.json()
					setStore({ ...store, vehicle: [...store.vehicle, data] });
					console.log("API respondió bien con obj personas", data)
				} catch (error) {
					console.log("No se pudo recuperar obj personas ", error)
				}
			},





			setFavoritesCharacters: (char) => {
				const store = getStore()
				const favoriteCharacterAlreadyExist = store.favorites.includes(char.result.properties.name)
				if (!favoriteCharacterAlreadyExist) {
					setStore({ favorites: [...store.favorites, char.result.properties.name] })
				}
			},
			setFavoritesPlanets: (planet) => {
				const store = getStore()
				const favoritePlanetAlreadyExist = store.favorites.includes(planet.result.properties.name)
				if (!favoritePlanetAlreadyExist) {
					setStore({ favorites: [...store.favorites, planet.result.properties.name] })
				}
			},
			setFavoritesVehicles: (vehicle) => {
				const store = getStore()
				const favoriteVehicleAlreadyExist = store.favorites.includes(vehicle.result.properties.name)
				if (!favoriteVehicleAlreadyExist) {
					setStore({ favorites: [...store.favorites, vehicle.result.properties.name] })
				}
			},
			deleteFavorite: (index) => {
				const store = getStore();
				const updatedFavorites = [...store.favorites];
				updatedFavorites.splice(index, 1);
				setStore({ favorites: updatedFavorites });
			},

			detailChar: (uid) => {
				const store = getStore();
				const selected = store.char.find((e) => e.result.uid === uid);
				console.log("Esta es la info del char detail", selected);
				setStore({ ...store, oneChar: selected });
			},

			detailPlanet: (uid) => {
				const store = getStore();
				const selected = store.planet.find((e) => e.result.uid === uid);
				console.log("Esta es la info del char detail", selected);
				setStore({ ...store, onePlanet: selected });
			},

			detailVehicle: (uid) => {
				const store = getStore();
				const selected = store.vehicle.find((e) => e.result.uid === uid);
				console.log("Esta es la info del char detail", selected);
				setStore({ ...store, oneVehicle: selected });
			},
		}

	}
};


export default getState;