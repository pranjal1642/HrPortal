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
    <div className="container">
      <div className="row">
        <div className="col-6">
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
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <p>Emial Is Required</p>}
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
