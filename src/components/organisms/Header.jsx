import { RiLogoutBoxLine } from 'react-icons/ri';
import LoginModal from './LoginModal';
import { useState } from 'react';
import RegisterModal from './RegisterModal';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetLogin, asyncSetRegister } from '../../states/authUser/action';

export default function Header({ isLarege = false }) {
	const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
	const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
	const { authUser } = useSelector((states) => states);
	const dispatch = useDispatch();

	const handleOpenLoginModal = () => {
		setIsOpenModalLogin(true);
	};

	const handleOpenRegisterModal = () => {
		setIsOpenModalRegister(true);
	};

	const handleRegister = ({ email, name, password }) => {
		dispatch(asyncSetRegister({ email, name, password }));
	};

	const handleLogin = ({ email, password }) => {
		dispatch(asyncSetLogin({ email, password }));
	};

	return (
		<>
			<header className='header'>
				<div className={`${isLarege ? 'header-inner--large' : 'header-inner--medium'}`}>
					<h1>Takallamuu</h1>
					{!authUser ? (
						<div className='header__interactive-wrapper'>
							<div className=''>
								<button className='header__button' onClick={handleOpenLoginModal}>
									Login
								</button>
								<LoginModal
									isOpenModal={isOpenModalLogin}
									setOpenModal={setIsOpenModalLogin}
									handleLogin={handleLogin}
								/>
							</div>
							<div className=''>
								<button
									className='header__button button__register'
									onClick={handleOpenRegisterModal}
								>
									Register
								</button>
								<RegisterModal
									isOpenModal={isOpenModalRegister}
									setOpenModal={setIsOpenModalRegister}
									handleRegister={handleRegister}
								/>
							</div>
						</div>
					) : (
						<RiLogoutBoxLine />
					)}
				</div>
			</header>
		</>
	);
}
