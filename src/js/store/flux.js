import { checkPropTypes } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// starShips: [],
			planets: [],
			people: [],
			favorites: [],
			details: [
				{
					char: "Sample Char1",
					title: "Sample Title1"
				},
				{
					char: "Sample Char2",
					title: "Sample Title2"
				},
				{
					char: "Sample Char3",
					title: "Sample Title3"
				},
				{
					char: "Sample Char4",
					title: "Sample Title4"
				},
				{
					char: "Sample Char5",
					title: "Sample Title5"
				}
			]
		},

		actions: {
			deleteLike: props => {
				let listLike = [];

				for (let i = 0; i < getStore().favorites.length; i++) {
					if (props != getStore().favorites[i]) {
						listLike.push(getStore().favorites[i]);
					}
				}
				setStore({ favorites: listLike });
			},
			like: props => {
				if (!getStore().favorites.includes(props)) setStore({ favorites: [...getStore().favorites, props] });
			},

			getPlanets: async () => {
				let next = "";

				const store = getStore();
				let link = "https://swapi.dev/api/planets/?page=";

				for (let i = 1; next !== null; i++) {
					let response = await fetch(link.concat(i.toString()));
					let newPlanet = await response.json();
					next = newPlanet.next;

					newPlanet.results.map((ship, index) => {
						setStore({ planets: [...store.planets, ship] });
					});
				}
			},
			getCharacter: async () => {
				let next = "";
				const store = getStore();
				let link = "https://swapi.dev/api/people/?page=";

				for (let i = 1; next !== null; i++) {
					let response = await fetch(link.concat(i.toString()));
					let newPlanet = await response.json();
					next = newPlanet.next;

					newPlanet.results.map((ship, index) => {
						setStore({ people: [...store.people, ship] });
					});
				}
			},
			setDetails: (name, char1, char2, char3, char4, char5, title1, title2, title3, title4, title5, img) => {
				setStore({
					details: [
						{ char: char1, title: title1 },
						{ char: char2, title: title2 },
						{ char: char3, title: title3 },
						{ char: char4, title: title4 },
						{ char: char5, title: title5 }
					]
				});
				setStore({ name: name });
				setStore({ img: img });
			}
		}
	};
};

export default getState;
