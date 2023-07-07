const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			newContact: {}
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

			createContacts: valores => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(valores)
				})
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},
			//Delete
			deleteContacts: key => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${key}`, {
					method: "DELETE"
				})
					.then(response => response.json())
					.then(data => console.log(data))
					//.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
