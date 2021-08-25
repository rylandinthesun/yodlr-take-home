import { useState } from 'react';
import axios from 'axios';

import './SignUpForm.css';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
	const [
		email,
		setEmail
	] = useState('');
	const [
		firstName,
		setFirstName
	] = useState('');
	const [
		lastName,
		setLastName
	] = useState('');
	const [
		success,
		setSuccess
	] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		await axios
			.post('http://localhost:5000/users', {
				email     : email,
				firstName : firstName,
				lastName  : lastName
			})
			.then(function (response) {
				console.log(response);
				setEmail('');
				setFirstName('');
				setLastName('');
				setSuccess(!success);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className="form-container">
			<h3 className="signup-heading">Sign Up!</h3>
			<form className="form" onSubmit={handleSubmit}>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="johnsmith@gmail.com"
				/>
				<label htmlFor="firstName">First Name:</label>
				<input
					type="text"
					name="firstName"
					id="firstName"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					placeholder="John"
				/>
				<label htmlFor="lastName">Last Name:</label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					placeholder="Smith"
				/>
				{!success ? <button type="submit">Submit</button> : <h4 className="success">Success!</h4>}
			</form>
			<div className="back-link">
				<Link to="/">Home</Link>
			</div>
		</div>
	);
};

export default SignUpForm;
