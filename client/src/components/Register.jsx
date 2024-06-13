// from installed packages
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MdMovie } from "react-icons/md";

// from custom files
import MyContext from "../context/Context";
import baseUrl from "../utilities/baseUrl";

// register components
function Register() {
  const myState = useContext(MyContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error state
    setErrors({});

    // Validation checks
    const newErrors = {};
    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const api = await axios.post(
        `${baseUrl}/user/register`,
        {
          name,
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
        navigate("/profile");
      }, 1500);
    } catch (error) {
      myState.setToast(true);
      myState.setToastMessage(error.response.data.message);
      myState.setIsAuthenticated(false);
    }
  };

  // css of register
  const container = ` text-gray-200 px-4 pt-0 pb-4`;
  const wrapper = `flex flex-col gap-4 justify-center items-center my-3`;
  const title = `text-left text-4xl `;
  const registerForm = `flex flex-col gap-4 bg-deepBlue px-9 py-6 rounded-lg w-full md:w-3/4 lg:w-1/2`;
  const labelInputWrapper = "flex flex-col gap-1";
  const labelStyle = "font-semibold ml-2";
  const inputStyle = `bg-transparent h-12 p-3  focus:outline-none border-b-2 `;
  const submitButton = `text-lg font-semibold h-12 rounded-lg bg-darkRed`;
  const errorPlaceholder = `text-red-600 placeholder-red-600`;

  return (
    <>
      <div className={container}>
        <div className={wrapper}>
          <MdMovie className="text-darkRed text-center text-5xl md:text-6xl" />

          <form onSubmit={handleSubmit} className={registerForm}>
            {/* name input  */}
            <div className={labelInputWrapper}>
              <h1 className={title}>Sign up</h1>

              <input
                value={name}
                onFocus={() => setErrors({ ...errors, name: "" })}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className={`${inputStyle} ${
                  errors.name ? errorPlaceholder : ""
                }`}
                id="exampleInputName"
                placeholder={errors.name || "Enter Name"}
              />
            </div>

            {/* email input  */}
            <div className={labelInputWrapper}>
              <input
                value={email}
                onFocus={() => setErrors({ ...errors, email: "" })}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className={`${inputStyle} ${
                  errors.email ? errorPlaceholder : ""
                }`}
                id="exampleInputEmail"
                placeholder={errors.email || "Enter Email"}
              />
            </div>

            {/* password input  */}
            <div className={labelInputWrapper}>
              <input
                value={password}
                onFocus={() => setErrors({ ...errors, password: "" })}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className={`${inputStyle} ${
                  errors.password ? errorPlaceholder : ""
                }`}
                id="exampleInputPassword"
                placeholder={errors.password || "Enter Password"}
              />
            </div>

            <button type="submit" className={submitButton}>
              Create an account
            </button>
          </form>
          <div className="hover:text-darkRed">
            <Link to={"/profile"}>
              Already have an account?{" "}
              <span className="text-darkRed">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
