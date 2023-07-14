const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			newContact: {},
			contactToEdit: {}
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
			// get one contact
			getOneContact: id => {
				console.log(`getting specific contact information for ${id}`);
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "GET"
				})
					.then(response => response.json())
					//.then(data => console.log(data))
					.then(data => setStore({ contactToEdit: data }))
					.catch(error => console.log(error));
				console.log(getStore().contactToEdit);
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
			deleteContacts: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE"
				})
					.then(response => {
						console.log(response);
						if (response.ok === true) {
							getActions().getContacts();
						}
						return response.json();
					})
					//.then(data => console.log(data))
					//.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
