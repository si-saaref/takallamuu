import { Link } from 'react-router-dom';
import Header from '../components/organisms/Header';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetLogin } from '../states/authUser/action';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';

export default function LoginPage() {
	const [email, handleChangeEmail] = useInput('');
	const [password, handleChangePassword] = useInput('');
	const dispatch = useDispatch();
	const { authUser } = useSelector((states) => states);
	const navigate = useNavigate();

	useEffect(() => {
		if (authUser !== null) {
			navigate('/');
		}
	}, [authUser]);

	const handleLogin = ({ email, password }) => {
		dispatch(asyncSetLogin({ email, password }));
	};

	return (
		<>
			<Header />
			<main>
				<div className='loginpage container'>
					<div className='container-single loginpage-content'>
						<div className='loginpage-header'>
							<h1>Trending Now</h1>
							<h1>Join Takallamuu today</h1>
						</div>
						<form className='form-container loginpage'>
							<div className='form__input-wrapper'>
								<input
									type='text'
									name='email'
									id='email-input'
									placeholder='Email'
									autoComplete='off'
									value={email}
									onChange={handleChangeEmail}
								/>
							</div>
							<div className='form__input-wrapper'>
								<input
									type='password'
									name='password'
									id='password-input'
									placeholder='Password'
									autoComplete='off'
									value={password}
									onChange={handleChangePassword}
								/>
							</div>
							<button
								type='button'
								className='form__button button-login'
								onClick={() => handleLogin({ email, password })}
							>
								Login
							</button>
						</form>
						<div className='register-info-wrapper'>
							<p>Don&apos;t have an account?</p>
							<Link to='/register'>Sign Up</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
