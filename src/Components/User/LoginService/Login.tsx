import { useForm } from "react-hook-form";
import { LoginApi } from "../../../apiServices/apiFetch";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // login function
  const login = async (e: any) => {
    try {
      const loginPayload = { email: e?.email, password: e?.password };
      const res: any = await LoginApi(loginPayload);
      console.log(res, "LOGIN");
      // if (res?.status == 200 || res?.status == 201) {
      if (res) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // onsubmit function
  const onSubmit = (data: any) => {
    login(data);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <h2>HrPortal Login</h2>
        </div>
        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Email:</label>
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="error-msg">Email Is Required</span>
              )}
            </div>

            <div>
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="**********"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <span className="error-msg">Password is required</span>
              )}
            </div>

            <button className="btn btn-primary mt-4" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
