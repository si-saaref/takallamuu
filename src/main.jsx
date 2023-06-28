import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './states/index';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	</BrowserRouter>
);
