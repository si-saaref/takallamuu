import { RiLogoutBoxLine } from 'react-icons/ri';
import LoginModal from './LoginModal';
import { useState } from 'react';

export default function Header({ isLarege = false }) {
	const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
	const { authUser = false } = {};

	const handleOpenLoginModal = () => {
		setIsOpenModalLogin(true);
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
								<LoginModal isOpenModal={isOpenModalLogin} setOpenModal={setIsOpenModalLogin} />
							</div>
							<button className='header__button button__register'>Register</button>
						</div>
					) : (
						<RiLogoutBoxLine />
					)}
				</div>
			</header>
		</>
	);
}
