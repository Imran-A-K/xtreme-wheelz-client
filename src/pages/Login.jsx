import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [password, setPassword] = useState("");
  const { googleSignIn, signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");

  const handleEmail = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        emailInput
      )
    ) {
      setEmailError("Please provide a valid email address");
    } else {
      setEmailError("");
    }
  };
  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");
    const form = event.target;

    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        // console.log(error.message)
        if (error.message.includes("user-not-found")) {
          setError(
            "We did not find your account! Please check if you entered your email address correctly. If you are new to this site Please Register"
          );
        } else if (error.message.includes("wrong-password")) {
          setError("Wrong Password! Please Enter your password correctly");
          event.target.password.focus();
        }
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>XtremeWheelz | Login</title>
      </Helmet>
      <div className="bg-indigo-100 w-11/12 max-w-[550px] flex rounded-2xl shadow-lg p-5 items-center">
        <div className="w-full px-8 md:px-16">
          <h2 className="font-bold text-3xl text-center text-[#002D74]">
            Welcome Back
          </h2>
          <p className="text-lg text-center mt-4 text-[#002D74]">
            Please Enter your details to Login
          </p>

          <form
            onSubmit={(event) => handleLogin(event)}
            className="flex flex-col gap-4"
          >
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmail}
              required
            />
            {emailError && (
              <span className="text-red-500 text-sm m-0">{emailError}</span>
            )}
            <label className="text-lg font-medium">Password</label>
            <input
              className="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              required
            />
            {error && <span className="text-red-500 text-sm m-0">{error}</span>}

            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 mt-5"
            >
              Login
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button
            onClick={() => handleGoogleSignIn()}
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 font-semibold duration-300 text-[#5080cd]"
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Login with Google
          </button>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p className="text-sm">New to this site? Please register </p>
            <Link to="/register">
              <button className="py-2 px-5 bg-white text-sm font-bold border rounded-xl hover:scale-110 duration-300 hover:bg-[#002D74] hover:text-white">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
