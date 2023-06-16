import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';

export default function LoginForm({ onSignIn }) {
	const [email, handleChangeEmail] = useInput('');
	const [password, handleChangePassword] = useInput('');

	return (
		<>
			<div className='login-form'>
				<form className='form-container'>
					<div className='form__content__inner'>
						<input
							type='text'
							name='email'
							id='email-input'
							placeholder='Email'
							value={email}
							onChange={handleChangeEmail}
						/>
					</div>
					<div className='form__content__inner'>
						<input
							type='password'
							name='password'
							id='password-input'
							placeholder='Password'
							value={password}
							onChange={handleChangePassword}
						/>
					</div>
					<button
						type='button'
						className='button-submit-form'
						onClick={() => onSignIn({ email, password })}
					>
						Login
					</button>
				</form>
				<div className='register-info-wrapper'>
					<p>Belum punya akun?</p>
					<Link to='/register'>Daftar disini</Link>
				</div>
			</div>
		</>
	);
}
