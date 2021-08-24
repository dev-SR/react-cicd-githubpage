import React, { useState } from 'react';
import {
	HashRouter as Router,
	// BrowserRouter don't work with github action
	Route,
	Switch
} from 'react-router-dom';

// ENV in vite
console.log(import.meta.env.VITE_BASE_URL);

interface Props {
	route: string;
}
const Comp: React.FC<Props> = ({ route }) => {
	const [count, setCount] = useState(0);

	return (
		<div className='flex flex-col min-h-screen bg-gray-900 items-center justify-center'>
			<div className='flex flex-col items-center justify-center space-y-4'>
				<h1 className='text-3xl text-yellow-100 bg-red-600 p-2 rounded'>
					{route} Page
				</h1>
				<button
					onClick={() => setCount((prev) => prev + 1)}
					className='bg-yellow-400 rounded px-4 py-2 text-2xl hover:bg-yellow-500 transition duration-300 ease-in-out'>
					Clicked {count} times
				</button>
			</div>
		</div>
	);
};
function App() {
	return (
		<Router>
			<Switch>
				<Route
					path='/'
					exact
					component={() => <Comp route='Home'></Comp>}
				/>
				<Route
					path='/test'
					exact
					component={() => <Comp route='Test'></Comp>}
				/>
				<Route path='*' component={() => <Comp route='NOT FOUND'></Comp>} />
			</Switch>
		</Router>
	);
}

export default App;
