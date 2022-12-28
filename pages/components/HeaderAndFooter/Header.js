import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../../../components/Context/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handlelogout = () => {
    logOut();
  };
  return (
    <div className="mb-5">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/service/service">Service</Link>
              </li>
              <li>
                <Link href="/blogs/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/aboutus/aboutus">About us</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Varay Calito
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/service/service">Service</Link>
            </li>
            <li>
              <Link href="/blogs/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/aboutus/aboutus">About us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            {user?.email ? (
              <>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">{user?.displayName}</a>
                  </li>
                  <li>
                    <button onClick={handlelogout}>Log out</button>
                  </li>
                </ul>
              </>
            ) : (
              <Link href="/login/login">Log in</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
