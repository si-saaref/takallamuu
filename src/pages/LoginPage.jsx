import { Link } from 'react-router-dom';
import Header from '../components/organisms/Header';
import useInput from '../hooks/useInput';

export default function LoginPage() {
	const [email, handleChangeEmail] = useInput('');
	const [password, handleChangePassword] = useInput('');
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
