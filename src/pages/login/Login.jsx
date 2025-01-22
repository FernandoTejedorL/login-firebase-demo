import { signInWithEmailAndPassword } from 'firebase/auth';
import Menu from '../../components/menu/Menu';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	return (
		<>
			<Menu />
			<h1>Login</h1>
			<form onSubmit={event => loginUser(event, navigate)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' id='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' id='password' />
				</div>
				<input type='submit' value='Login User' />
			</form>
		</>
	);
};

const loginUser = async (event, navigate) => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		console.log('User Logged');
		event.target.reset();
		navigate('/');
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Login;
