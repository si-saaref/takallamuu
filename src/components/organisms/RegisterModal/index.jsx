import useInput from '../../../hooks/useInput';
import Modal from '../../molecules/Modal';

export default function RegisterModal({ handleRegister, isOpenModal = false, setOpenModal }) {
	const [name, handleChangeName] = useInput('');
	const [email, handleChangeEmail] = useInput('');
	const [password, handleChangePassword] = useInput('');

	return (
		<Modal isOpenModal={isOpenModal} setOpenModal={setOpenModal} title='Register'>
			<div className='modal-register'>
				<form className='form-container'>
					<div className='form__input-wrapper'>
						<input
							type='text'
							name='name'
							id='name-input'
							placeholder='Name'
							value={name}
							autoComplete='off'
							onChange={handleChangeName}
						/>
					</div>
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
						className='form__button button-register'
						onClick={() => handleRegister({ email, password, name })}
					>
						Register
					</button>
				</form>
			</div>
		</Modal>
	);
}
