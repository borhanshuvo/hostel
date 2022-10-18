import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import infoEmoji from "../images/info-emoji.svg";
import "../styles/login.css";
import Navbar from "./navbar";

const Login = () => {
  // const [newUser, setNewUser] = useState(false);
  const { setLoggedInUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmitLogin = (data) => {
    fetch("https://test.flexflix.io/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("token", result.access_token);
        setLoggedInUser({
          email: result.email,
          name: result.name,
          token: result.access_token,
        });
        navigate("/dashboard");
      });
  };

  // const onSubmitRegister = (data) => {
  //   console.log(data);
  // };

  const [show, setShow] = useState("block");

  return (
    <>
      <Navbar />
      <div className="container pt-5 mt-5">
        <div className="row mt-5">
          <div className="login-style">
            <div style={{ display: show }} className="card pb-2">
              <div className="d-flex justify-content-between pb-2">
                <strong>
                  <img src={infoEmoji} className="rounded me-2" alt="" />
                  Login Information
                </strong>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  onClick={() => setShow("none")}
                ></button>
              </div>
              <div className="text-center">
                <span>Admin: admin@gmail.com || Pass: 12345678</span>
                {/* <br /> */}
                {/* <span>Member: member@gmail.com || Pass: 12345678</span> */}
              </div>
            </div>
            <h4 className="text-center">
              {/* {newUser ? "Registration" : "Login"} */}
              Login
            </h4>
            <br />
            {/* {!newUser && ( */}
            <form onSubmit={handleSubmit(onSubmitLogin)}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  {...register("email", { required: true })}
                  className="form-control"
                />
              </div>
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  {...register("password", { required: true })}
                  className="form-control"
                />
              </div>
              {errors.password && (
                <span className="text-danger">This field is required</span>
              )}

              <div>
                <input
                  type="submit"
                  className="btn btn-primary form-control"
                  value="Sign in"
                />
              </div>
            </form>
            {/* )} */}
            {/* {newUser && (
              <form onSubmit={handleSubmit(onSubmitRegister)}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="form-control"
                    {...register("name", { required: true })}
                  />
                </div>
                {errors.name && (
                  <span className="text-danger">This field is required</span>
                )}

                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    className="form-control"
                    {...register("email", { required: true })}
                  />
                </div>
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="off"
                    className="form-control"
                    {...register("password", { required: true })}
                  />
                </div>
                {errors.password && (
                  <span className="text-danger">This field is required</span>
                )}

                <div>
                  <input
                    type="submit"
                    className="btn btn-primary form-control"
                    value="Sign up"
                  />
                </div>
              </form>
            )} */}
            <br />
            {/* <p className="text-center">
              {newUser ? "Already have an Account?" : "Don't have account?"}
              <button
                name="newUser"
                onClick={() => setNewUser(!newUser)}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  color: "blue",
                }}
              >
                {newUser ? "Login" : "Create a new Account"}
              </button>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
