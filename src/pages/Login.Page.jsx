import LoginForm from '../components/organisms/LoginForm';

export default function LoginPage() {
	return (
		<>
			<div className='loginpage container'>
				<div className='container__inner'>
					<h1>Login</h1>
					<LoginForm />
				</div>
			</div>
		</>
	);
}
