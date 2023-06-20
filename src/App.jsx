import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import './styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncSetIsPreload } from './states/isPreload/action';
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotfOUND';

function App() {
	const { isPreload, authUser } = useSelector((states) => states);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncSetIsPreload());
	}, [dispatch]);

	if (isPreload && !authUser) {
		return null;
	}

	return (
		<>
			<div>
				<Toaster />
			</div>
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/thread/:id' element={<DetailPage />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
