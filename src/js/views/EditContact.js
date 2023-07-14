import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
//import { useParams } from "react-router";

export const EditContact = () => {
	//	const params = useParams();
	const { store, actions } = useContext(Context);

	console.log(store.contactToEdit);

	const [inputName, setInputName] = useState(store.contactToEdit.full_name);
	const [inputEmail, setInputEmail] = useState(store.contactToEdit.email);
	const [inputPhone, setInputPhone] = useState(store.contactToEdit.phone);
	const [inputAddress, setInputAddress] = useState(store.contactToEdit.address);

	// useEffect(() => {
	// 	actions.getOneContact(params.id);
	// }, []);
	// handle click
	//console.log(store.newContact);

	function handleEdit(e) {
		e.preventDefault();
		/*console.log({
			full_name: inputName,
			email: inputEmail,
			agenda_slug: "agenda_intiluna",
			address: inputAddress,
			phone: inputPhone
		})
		*/
		//console.log(store.contactToEdit.id);

		actions.editOneContact(store.contactToEdit.id, {
			full_name: inputName,
			email: inputEmail,
			agenda_slug: "agenda_intiluna",
			address: inputAddress,
			phone: inputPhone
		});

		setInputName("");
		setInputEmail("");
		setInputPhone("");
		setInputAddress("");
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							//defaultValue={store.contactToEdit.full_name}
							//defaultValue="1000"
							onChange={e => setInputName(e.target.value)}
							value={inputName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={e => setInputEmail(e.target.value)}
							value={inputEmail}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={e => setInputPhone(e.target.value)}
							value={inputPhone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={e => setInputAddress(e.target.value)}
							value={inputAddress}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={e => handleEdit(e)}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
