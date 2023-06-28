import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import './styles/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { asyncSetIsPreload } from './states/isPreload/action';
import { Toaster } from 'react-hot-toast';
import NotFound from './pages/NotFound';
import useNotification from './hooks/useNotification';
import { setErrorMessage } from './states/error/action';
import Loader from './components/molecules/Loader';

function App() {
	const { isPreload, authUser, errorMessage } = useSelector((states) => states);
	const dispatch = useDispatch();
	const notif = useNotification();

	useEffect(() => {
		dispatch(asyncSetIsPreload());
	}, [dispatch]);

	useEffect(() => {
		if (errorMessage) {
			notif.miniError(errorMessage);
			dispatch(setErrorMessage(null));
		}
	}, [dispatch, notif, errorMessage]);

	if (isPreload && !authUser) {
		return null;
	}

	return (
		<>
			<div>
				<Toaster />
			</div>
			<Loader />
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
