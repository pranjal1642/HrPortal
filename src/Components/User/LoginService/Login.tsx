import { useForm } from "react-hook-form";
import { fetchApi } from "../../../apiServices/axios";

const Login = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();

  // login function
  const login = async (e: any) => {
    try {
      const payload = { email: e?.email, password: e?.password };
      await fetchApi({ url: "http://localhost:4000/login", method: "POST", body: payload, });
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
