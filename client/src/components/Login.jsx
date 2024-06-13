// from installed packages
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdMovie } from "react-icons/md";

// from custom files
import MyContext from "../context/Context";
import baseUrl from "../utilities/baseUrl";

function Login() {
  const myState = useContext(MyContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const api = await axios.post(
        `${baseUrl}/user/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      myState.setToast(true);
      myState.setToastMessage(api.data.message);
      myState.setIsAuthenticated(true);

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      myState.setToast(true);
      myState.setToastMessage(error.response.data.message);
      myState.setIsAuthenticated(false);
    }
  };

  const container = `text-gray-200 p-4`;
  const wrapper = `flex flex-col gap-7 justify-center items-center my-3`;
  const title = `text-left text-4xl`;
  const loginForm = `flex flex-col gap-6 bg-deepBlue p-9 rounded-lg w-full md:w-3/4 lg:w-1/2`;
  const labelInputWrapper = "flex flex-col gap-2";
  const inputStyle = `bg-transparent h-12 p-3  focus:outline-none border-b-2 `;
  const submitButton = `text-lg font-semibold h-12 rounded-lg bg-darkRed`;

  return (
    <>
      <div className={container}>
        <div className={wrapper}>
          <MdMovie className="text-darkRed text-center text-5xl md:text-6xl" />

          <form onSubmit={handleSubmit} className={loginForm}>
            <div className={labelInputWrapper}>
              <h1 className={title}>Login </h1>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className={inputStyle}
                id="exampleInputEmail"
                placeholder="Enter email"
              />
            </div>
            <div className={labelInputWrapper}>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className={inputStyle}
                id="exampleInputPassword"
                placeholder="Password"
              />
            </div>
            <button className={submitButton}>Login to your account</button>
          </form>
          <div className="hover:text-darkRed">
            <Link to={"/profile/register"}>
              Don't have an account?{" "}
              <span className="text-darkRed">Register here.</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
