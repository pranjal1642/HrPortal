import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
	useEffect(() => {});

	const logingApi = async () => {
		try {
			const payload = {
				email: 'abc@gmail.com',
				password: 'akjldaa',
				contactNumber: '8307659141',
			};

			const response = await fetch('http://localhost:4000/login', {
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
		logingApi();
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="login">
						<div className="login-header">
							<h2>HrPortal Login</h2>
						</div>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div>
								<label>Email:</label>
								<input
									className="form-control"
									placeholder="Email"
									type="email"
									{...register('email', { required: 'Email is required' })}
								/>
								{errors.email && <p>Emial Is Required</p>}
							</div>

							<div>
								<label>Password:</label>
								<input
									type="password"
									className="form-control"
									placeholder="**********"
									{...register('password', {
										required: 'Password is required',
									})}
								/>
								{errors.password && <p>Password is required</p>}
							</div>

							<button className="btn btn-primary mt-4" type="submit">
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
