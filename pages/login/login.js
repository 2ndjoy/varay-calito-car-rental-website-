import Link from "next/link";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../components/Context/AuthProvider";

const login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError] = useState("");
  const { signIn, forgetPassword } = useContext(AuthContext);
  const [loginemail, setLoginemail] = useState("");

  // const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    // console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginemail(data.email);
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error.message)
        setLoginError(error.message);
      });
  };

  const handleforgetPassword = (data) => {
    forgetPassword(data.email)
      .then(() => {
        toast.success("Sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                message: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />

            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn bg-amber-900 text-white w-full my-4"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <button
          className="label-text"
          onClick={handleSubmit(handleforgetPassword)}
        >
          Forget Password?
        </button>
        <p className="text-amber-900">
          New to Varay Calito?{" "}
          <Link className="text-amber-700" href="/register/register">
            Create new Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn text-amber-900 btn-outline w-full">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default login;
