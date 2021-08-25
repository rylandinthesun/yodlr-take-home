import axios from 'axios';
import { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';

import './UserList.css';

const UserList = () => {
	const [
		userData,
		setUserData
	] = useState([]);

	const getUsers = async () => {
		const res = await axios.get('http://localhost:5000/users');
		const users = res.data;
		setUserData(users);
	};

	useEffect(
		() => {
			getUsers();
		},
		[
			userData
		]
	);

	return (
		<div>
			<div className="userlist-container">
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
			<div className="back-link">
				<Link to="/">Back</Link>
			</div>
		</div>
	);
};

export default UserList;
