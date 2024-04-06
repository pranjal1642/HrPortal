import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
	useEffect(() => {});

	const logMovies = async () => {
		try {
			const payload = {
				email: 'abc@gmail.com',
				password: 'akjldaa',
				contactNumber: '8307659141',
			};

			const response = await fetch('http://localhost:4000/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error('Error:', error);
		}
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		logMovies();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label>Email:</label>
				<input {...register('email', { required: 'Email is required' })} />
				{/* {errors.email && <p>{errors.email.message}</p>} */}
			</div>

			<div>
				<label>Password:</label>
				<input
					type="password"
					{...register('password', { required: 'Password is required' })}
				/>
				{/* {errors.password && <p>{errors.password.message}</p>} */}
			</div>

			<button type="submit">Login</button>
		</form>
	);
};

export default Login;
