const UserCard = ({ email, firstName, lastName, state }) => {
	return (
		<div>
			<div>
				{firstName} {lastName}
			</div>
			<div>{email}</div>
			<div>Status: "{state}"</div>
		</div>
	);
};

export default UserCard;
