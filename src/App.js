import React from 'react';

import GlobalStyle from './theme/GlobalStyle';
import Navbar from './components/navbar/Navbar';

const App = () => {
	return (
		<div>
			<GlobalStyle />
			<Navbar />
		</div>
	);
};

export default App;
