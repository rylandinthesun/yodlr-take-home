import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Yodlr Design Challenge</h1>
			<p>
				<Link to="/signup">
					<button>Sign Up page</button>
				</Link>
				<Link to="/admin">
					<button>Admin page</button>
				</Link>
			</p>
		</div>
	);
};

export default Home;
