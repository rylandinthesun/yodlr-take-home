import { Switch, Route, Redirect } from 'react-router-dom';
import Admin from '../adminpage/Admin';
import Home from '../homepage/Home';
import SignUpForm from '../signup/SignUpForm';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>

			<Route exact path="/signup">
				<SignUpForm />
			</Route>

			<Route exact path="/admin">
				<Admin />
			</Route>

			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
