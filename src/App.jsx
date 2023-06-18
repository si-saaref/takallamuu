import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login.Page';
import './styles/styles.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncSetIsPreload } from './states/isPreload/action';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncSetIsPreload());
	}, [dispatch]);

	return (
		<>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/thread/:id' element={<DetailPage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<h1>REGISTERPAGE </h1>} />
				</Routes>
			</main>
		</>
	);
}

export default App;
