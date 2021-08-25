import axios from 'axios';
import { useState, useEffect } from 'react';
import UserCard from './UserCard';

const UserList = ({ users }) => {
	const [
		userData,
		setUserData
	] = useState([]);

	const getUsers = async () => {
		const res = await axios.get('http://localhost:5000/users');
		const users = res.data;
		setUserData(users);
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			{userData.map((u) => (
				<UserCard
					key={u.id}
					id={u.id}
					email={u.email}
					firstName={u.firstName}
					lastName={u.lastName}
					state={u.state}
				/>
			))}
		</div>
	);
};

export default UserList;
