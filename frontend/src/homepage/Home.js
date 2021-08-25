import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
	return (
		<div className="container">
			<h1 className="heading">
				Yodlr <span>Design</span> Challenge
			</h1>
			<p className="btn-group">
				<Link to="/signup">
					<button className="signup-btn">Sign Up page</button>
				</Link>
				<Link to="/admin">
					<button className="admin-btn">Admin page</button>
				</Link>
			</p>
		</div>
	);
};

export default Home;
