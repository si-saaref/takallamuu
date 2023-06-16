import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/styles.css';
import LoginPage from './pages/Login.Page';
import Header from './components/organisms/Header';

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<h1>HOMEPAGE </h1>} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<h1>REGISTERPAGE </h1>} />
				</Routes>
			</main>
		</>
	);
}

export default App;
