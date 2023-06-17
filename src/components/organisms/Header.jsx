import { RiLogoutBoxLine } from 'react-icons/ri';

export default function Header({ isLarege = false }) {
	const { authUser = false } = {};
	return (
		<>
			<header className='header'>
				<div className={`${isLarege ? 'header-inner--large' : 'header-inner--medium'}`}>
					<h1>Takallamuu</h1>
					{!authUser ? (
						<div className='header__interactive-wrapper'>
							<button className='header__button'>Login</button>
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
