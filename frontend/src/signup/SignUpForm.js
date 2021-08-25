import { useState } from 'react';
import axios from 'axios';

const SignUpForm = ({ value }) => {
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
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div>
			<h3>Sign Up!</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="email">Email:</label>
				<input type="email" name="email" id="email" value={value} onChange={(e) => setEmail(e.target.value)} />
				<label htmlFor="firstName">First Name:</label>
				<input
					type="text"
					name="firstName"
					id="firstName"
					value={value}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<label htmlFor="lastName">Last Name:</label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					value={value}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default SignUpForm;
