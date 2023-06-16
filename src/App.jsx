import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/styles.css';
import LoginPage from './pages/Login.Page';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<h1>HOMEPAGE </h1>} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<h1>REGISTERPAGE </h1>} />
			</Routes>
		</>
	);
}

export default App;
