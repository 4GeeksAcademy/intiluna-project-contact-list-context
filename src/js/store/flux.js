const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda_intiluna", {
					method: "GET"
				})
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},

			createContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST"
				})
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
