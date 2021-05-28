import React from 'react';

import GlobalStyle from './theme/GlobalStyle';
import Navbar from './components/navbar/Navbar';

import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Navbar />
			<Dashboard />
		</div>
	);
};

export default App;
