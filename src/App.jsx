import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import './styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncSetIsPreload } from './states/isPreload/action';

function App() {
	const { isPreload } = useSelector((states) => states);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncSetIsPreload());
	}, [dispatch]);

	if (isPreload) {
		return null;
	}

	return (
		<>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/thread/:id' element={<DetailPage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
