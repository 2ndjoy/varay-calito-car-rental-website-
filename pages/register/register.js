import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../components/Context/AuthProvider";

const register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setsignUpError] = useState("");

  const imageHostKEy = process.env.REACT_APP_IMGB_APIKEY;
  const handleSignUp = (data) => {
    const photo = data.photo[0];
    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=94c2a478e54e97d802b6d035fdda4286`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        createUser(data.email, data.password).then((result) => {
          const user = result.user;
          console.log(user);
          saveUser(data.email, data.name);
          updateUserProfile(data.name, imgData.data.display_url).then(
            toast.success("user created successfully")
          );
          router.push("/");
        });
      });
  };

  const saveUser = (email, name) => {
    const user = { email, name };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log(user);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div>
        <h2 className="text-2xl text-center">Sign up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              {...register("name", { required: "Name is required" })}
              type="text"
            />
          </div>
          {errors.name && (
            <p role="alert" className="text-warning">
              {errors.name.message}
            </p>
          )}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email is required" })}
              type="email"
            />
          </div>
          {errors.email && (
            <p role="alert" className="text-warning">
              {errors.email.message}
            </p>
          )}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Select your picture</span>
            </label>
            <input
              className="input w-full max-w-xs"
              {...register("photo", { required: "Photo is required" })}
              type="file"
            />
          </div>
          {errors.photo && (
            <p role="alert" className="text-warning">
              {errors.photo.message}
            </p>
          )}

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "password must be 6 char long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "password must be strong",
                },
              })}
            />
          </div>
          {errors.password && (
            <p role="alert" className="text-warning">
              {errors.password.message}
            </p>
          )}

          <input
            className="btn bg-amber-900 text-white w-full my-4"
            value="Sign up"
            type="submit"
          />

          {signUpError && <p className="text-red-500">{signUpError}</p>}
        </form>
        <p className="text-blue-300">
          Already have an account? Please{" "}
          <Link className="text-amber-100" href="/login/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default register;
