import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import './App.css';

function App () {
	return (
		<div className="App">
			<BrowserRouter>
				<main>
					<Routes />
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
