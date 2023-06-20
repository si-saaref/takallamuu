import { RiLogoutBoxLine } from 'react-icons/ri';
import LoginModal from './LoginModal';
import { useEffect, useState } from 'react';
import RegisterModal from './RegisterModal';
import { useDispatch, useSelector } from 'react-redux';
import { asyncSetLogin, asyncSetLogout, asyncSetRegister } from '../../states/authUser/action';
import { useNavigate } from 'react-router-dom';
import useNotification from '../../hooks/useNotification';
import { setErrorMessage } from '../../states/error/action';

export default function Header({ isLarege = false }) {
	const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
	const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
	const { authUser, errorMessage } = useSelector((states) => states);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const notif = useNotification();

	useEffect(() => {
		if (errorMessage) {
			notif.miniError(errorMessage);
			dispatch(setErrorMessage(null));
		}
	}, [dispatch, notif, errorMessage]);

	const handleOpenLoginModal = () => {
		setIsOpenModalLogin(true);
	};

	const handleOpenRegisterModal = () => {
		setIsOpenModalRegister(true);
	};

	const handleRegister = ({ email, name, password }) => {
		dispatch(asyncSetRegister({ email, name, password }));
		setIsOpenModalRegister(false);
	};

	const handleLogin = ({ email, password }) => {
		dispatch(asyncSetLogin({ email, password }));
		setIsOpenModalLogin(false);
	};

	const handleLogout = () => {
		dispatch(asyncSetLogout());
	};

	return (
		<>
			<header className='header'>
				<div className={`${isLarege ? 'header-inner--large' : 'header-inner--medium'}`}>
					<h1 className='header__logo' onClick={() => navigate('/')}>
						Takallamuu
					</h1>
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
						<RiLogoutBoxLine onClick={handleLogout} />
					)}
				</div>
			</header>
		</>
	);
}
