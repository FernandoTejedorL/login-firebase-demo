import { createUserWithEmailAndPassword } from 'firebase/auth';
import Menu from '../../components/menu/Menu';
import { auth } from '../../config/firebase.config';

const Register = () => {
	return (
		<>
			<Menu />
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' id='email' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='text' name='password' id='password' />
				</div>
				<input type='submit' value='Register User' />
			</form>
		</>
	);
};

const registerUser = async event => {
	event.preventDefault();
	const email = event.target.email.value;
	const password = event.target.password.value;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		console.log('User Registered');
		event.target.reset();
	} catch (error) {
		console.log('Error registering user', error.code, error.message);
	}
};

export default Register;
