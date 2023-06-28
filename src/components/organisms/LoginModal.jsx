import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import Modal from '../molecules/Modal';

export default function LoginModal({ handleLogin, isOpenModal = false, setOpenModal }) {
	const [email, handleChangeEmail] = useInput('');
	const [password, handleChangePassword] = useInput('');

	return (
		<Modal isOpenModal={isOpenModal} setOpenModal={setOpenModal} title='Login'>
			<div className='modal-login'>
				<form className='form-container'>
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
		</Modal>
	);
}
