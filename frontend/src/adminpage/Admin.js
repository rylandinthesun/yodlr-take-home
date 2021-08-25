import { useState } from 'react';
import UserList from '../components/UserList';
import { Link } from 'react-router-dom';

import './Admin.css';

const Admin = () => {
	const [
		admin,
		setAdmin
	] = useState(false);
	const [
		password,
		setPassword
	] = useState('');
	const [
		error,
		setError
	] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === 'iamadmin') {
			setAdmin(true);
		}
		else {
			setError(true);
			setAdmin(false);
			setPassword('');
		}
	};

	return (
		<div className="admin-container">
			{admin ? (
				<UserList />
			) : (
				<div>
					{error && <div className="password-error">Incorrect password...try again...</div>}
					<form className="admin-form" onSubmit={handleSubmit}>
						<label htmlFor="password">Admin Password:</label>
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							placeholder="Admin Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit">Submit</button>
					</form>
					<div className="back-link">
						<Link to="/">Home</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Admin;
