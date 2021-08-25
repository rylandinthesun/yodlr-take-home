import axios from 'axios';
import './UserCard.css';

const UserCard = ({ id, email, firstName, lastName, state }) => {
	const handleStatus = async () => {
		await axios
			.put(`http://localhost:5000/users/${id}`, {
				id        : id,
				email     : email,
				firstName : firstName,
				lastName  : lastName,
				state     : 'active'
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<div className="user-card">
			<div className="user-name">
				{firstName} {lastName}
			</div>
			<div className="user-email">{email}</div>
			<div className="user-status">
				Status: <span>"{state}"</span>
			</div>
			{state === 'pending' && (
				<div className="set-active">
					<button onClick={() => handleStatus()}>Set Active</button>
				</div>
			)}
		</div>
	);
};

export default UserCard;
