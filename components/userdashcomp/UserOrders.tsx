import React from "react";
import UserOrderTable from "./UserOrderTable";
import { UserButton } from "@clerk/nextjs";

const UserOrders = () => {
  return (
    <div>
      <div className="drawer bg-gray-200">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-white">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="navbar-start">
              <div className="flex-1 px-2 mx-2">
                <a>
                  <img
                    src="../../images/Medishikshalogo.png"
                    alt="Logo"
                    className="w-28 h-16 mr-6"
                  />
                </a>
              </div>
            </div>
            <div className="navbar-center ml-8 hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/aboutLog">About Medishiksha</a>
                </li>
                <li>
                  <a href="/browseLog">Browse Courses</a>
                </li>
                <li>
                  <a href="/blogLog">Blog</a>
                </li>
                <li>
                  <a href="/contactLog">Contact Us</a>
                </li>
                <li>
                  <a href="/userdash">My Dashboard</a>
                </li>
                <li>
                  <a href="/userorders">My Orders</a>
                </li>
              </ul>
            </div>
            <div className="navbar-end lg:flex">
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  <li>
                    <div className="form-control mr-2">
                      <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-28 md:w-auto"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
          <UserOrderTable />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-6 w-80 min-h-full bg-white">
            <li>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-50 md:w-auto"
                />
              </div>
            </li>
            <li className="mt-2">
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/aboutLog">About Medishiksha</a>
            </li>
            <li>
              <a href="/browseLog">Browse Courses</a>
            </li>
            <li>
              <a href="/blogLog">Blog</a>
            </li>
            <li className="mb-2">
              <a href="/contactLog">Contact Us</a>
            </li>
            <li>
              <a href="/userdash">My Dashboard</a>
            </li>
            <li>
              <a href="/userorders">My Orders</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserOrders;
