import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<h1>HOMEPAGE </h1>} />
				<Route path='/login' element={<h1>LOGINPAGE </h1>} />
				<Route path='/register' element={<h1>REGISTERPAGE </h1>} />
			</Routes>
		</>
	);
}

export default App;
