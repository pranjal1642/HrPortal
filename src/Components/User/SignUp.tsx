import { useForm, SubmitHandler } from "react-hook-form";
import "./signUp.css";

interface IFormInput {
    email: string;
    password: string;
    confirmPassword: string;
    userName: string;
    userRole: string;
}

export default function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
        fetch('http://localhost:4000/register', { method: "POST", body: JSON.stringify(data) })
            .then(response => response.json())
            .then(data => console.log(data, "apiiiiiiii"))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
            <ul>
                <li>
                    <label>Username</label>
                    <input {...register("userName", { required: true, minLength: 3, maxLength: 20 })} placeholder="Enter username" />
                    {errors.userName && <span className="error-msg">Username must be between 3 and 20 characters</span>}
                </li>
                <li>
                    <label>Email</label>
                    <input {...register("email", { required: true, maxLength: 20 })} placeholder="Enter email" />
                    {errors.email && <span className="error-msg">Email is required</span>}
                </li>
                <li>
                    <label>Password</label>
                    <input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="Enter password" />
                    {errors.password && <span className="error-msg">Password must be at least 6 characters</span>}
                </li>
                <li>
                    <label>Confirm Password</label>
                    <input {...register("confirmPassword", { required: true, minLength: 6 })} type="password" placeholder="Confirm password" />
                    {errors.confirmPassword && <span className="error-msg">Confirm password is required</span>}
                </li>
                <li>
                    <label>User Role</label>
                    <select {...register("userRole", { required: true })}>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="subadmin">Subadmin</option>
                    </select>
                    {errors.userRole && <span className="error-msg">Please select a role</span>}
                </li>
            </ul>
            <input type="submit" value="Sign Up" />
        </form>

    );
}
