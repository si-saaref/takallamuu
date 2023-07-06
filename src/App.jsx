import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import useNotification from './hooks/useNotification';
import { asyncSetIsPreload } from './states/isPreload/action';
import { setErrorMessage } from './states/error/action';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';
import Loader from './components/molecules/Loader';
import './App.css';
import './styles/styles.css';
import LoginPage from './pages/LoginPage';

function App() {
	const { isPreload, authUser, errorMessage } = useSelector((states) => states);
	const dispatch = useDispatch();
	const notif = useNotification();

	useEffect(() => {
		dispatch(asyncSetIsPreload());
	}, [dispatch]);

	useEffect(() => {
		if (errorMessage) {
			notif.miniError(errorMessage.message);
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
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/thread/:id' element={<DetailPage />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
