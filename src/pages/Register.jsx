import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, logOut, updateUserProfile, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const to = location.state?.from?.from?.pathname || "/";

  const [name, setName] = useState("");

  const [photoUrl, setPhotoUrl] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fireBaseError, setFirebaseError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handlePassword = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
    if (passwordInput.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setFirebaseError("")
    // console.log(name, email, password, photoUrl);
    if (emailError) {
      event.target.email.focus();
      return;
    } else if (passwordError) {
      event.target.password.focus();
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        updateUserProfile(result.user, name, photoUrl);
        // console.log(createdUser);
        logOut()
          .then()
          .catch((error) => {
            console.log(error.message);
            });

        navigate("/login");
      })
      .catch((error) => {
        console.error(error.message);
        if (error.message.includes("auth/email-already-in-use")) {
          setFirebaseError(
            "Looks like you already registered please login to continue"
          );
      }
      });
  };
  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        // const loggedInUser = result.user;
        navigate(to, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>XtremeWheelz | Register</title>
      </Helmet>
      <div className="bg-indigo-100 w-11/12 max-w-[550px] flex rounded-2xl shadow-lg p-5 items-center">
        <div className="w-full px-8 md:px-16">
          <h2 className="font-bold text-3xl text-center text-[#002D74]">
            Welcome
          </h2>
          <p className="text-lg text-center mt-4 text-[#002D74]">
            Please enter your details to register
          </p>

          <form
            onSubmit={() => handleSubmit(event)}
            className="flex flex-col gap-4"
          >
            <label htmlFor="name" className="text-lg font-medium mt-8">
              Name
            </label>
            <input
              required
              className="p-2 rounded-xl border"
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              required
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={handleEmail}
            />
            {emailError && (
              <span className="text-red-500 text-sm m-0">{emailError}</span>
            )}
            <label className="text-lg font-medium">Password</label>
            <input
              required
              className="p-2 rounded-xl border w-full"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            {passwordError && (
              <span className="text-red-500 text-sm m-0">{passwordError}</span>
            )}
            <label htmlFor="url" className="text-lg font-medium">
              Image URL
            </label>
            <input
              required
              className="p-2 rounded-xl border"
              type="url"
              name="url"
              placeholder="Your Photo URL"
              value={photoUrl}
              onChange={(event) => setPhotoUrl(event.target.value)}
            />
            {fireBaseError && (
              <span className="text-red-500 text-sm m-0">{fireBaseError}</span>
            )}

            <button
              type="submit"
              className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 mt-5"
            >
              Register
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button
            onClick={() => handleGoogleSignUp()}
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
            Sign up with Google
          </button>

          <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
            <p className="text-sm">Already have an account? Please login </p>
            <Link to="/login">
              <button className="py-2 px-5 bg-white text-sm font-bold border rounded-xl hover:scale-110 duration-300 hover:bg-[#002D74] hover:text-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
