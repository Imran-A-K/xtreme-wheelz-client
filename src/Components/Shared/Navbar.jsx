import { useContext, useState } from "react";
import { FaCar, FaUserCircle } from "react-icons/fa";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user)
  const logOutHandler = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-violet-50 md:px-24 lg:px-8 fixed drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex gap-2 text-blue-500	max-[600px]:pl-3 items-center">
          <FaCar className="text-4xl"></FaCar>
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">XtremeWheelz</h1>
        </div>
        <ul className="hidden md:flex gap-7">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeTab" : "default")}
              to="/"
            >
              Home
            </NavLink>
          </li>
         {
          user &&  <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeTab" : "default")}
            to="myToys"
          >
            My Toys
          </NavLink>
        </li>
         }
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeTab" : "default")}
              to="allToys"
            >
              All Toys
            </NavLink>
          </li>
         {
          user &&  <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeTab" : "default")}
            to="addAToy"
          >
            Add A Toy
          </NavLink>
        </li>
         }
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "activeTab" : "default")}
              to="/blog"
            >
              Blogs
            </NavLink>
          </li>
        </ul>
        <div className="hidden md:flex pr-4">
          {user ? (
            <div className="flex justify-center items-center gap-4">
              <div
                className="tooltip tooltip-bottom duration-1000"
                data-tip={user?.displayName}
              >
                <div className="avatar pt-2">
                  <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </div>

              <button
                onClick={logOutHandler}
                className="hidden lg:block w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-3 bg-violet-500 rounded-xl text-white font-bold text-lg"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex">
              <Link to="/login">
                <button className="hidden lg:block mr-4 w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-green-500 rounded-xl text-white font-bold text-lg">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {user ? (
            <div className="flex items-center gap-2">
              <div
                className="tooltip duration-1000"
                data-tip={user?.displayName}
              >
                <img
                  className="w-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={user.photoURL}
                  alt={<FaUserCircle></FaUserCircle>}
                />
              </div>

              {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
            </div>
          ) : !nav ? (
            <MenuIcon className="w-5" />
          ) : (
            <XIcon className="w-5" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute lg:hidden text-center bg-zinc-200 w-full px-8 text-2xl"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/">
            Home
          </Link>
        </li>
        {
          user && <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/myToys">
            My Toys
          </Link>
        </li>
        }
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/allToys">
            All Toys
          </Link>
        </li>
        {
          user && <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/addAToy">
            Add A Toy
          </Link>
        </li>
        }
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="/blog">
            Blogs
          </Link>
        </li>

        <div className="flex flex-col my-4 items-center">
          {user ? (
            <button
              onClick={logOutHandler}
              className="lg:hidden w-40 active:scale-[.98] active:duration-75 transition-all ease-in-out transform py-3 bg-violet-500 rounded-xl text-white font-bold text-lg"
            >
              Log Out
            </button>
          ) : (
            <div className="flex">
              <Link to="/login">
                <button
                  onClick={handleClose}
                  className=" lg:hidden w-40 active:scale-[.98] active:duration-75 transition-all  ease-in-out transform py-4 bg-teal-500 rounded-xl text-white font-bold text-lg"
                >
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
