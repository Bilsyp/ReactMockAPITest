import React from "react";
import { Link } from "react-router-dom"
import open from "./open"
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className=" flex justify-between text-white p-4 bg-blue-600 w-full items-center relative ">
        <div className="brand">
          <h1 className="font-bold text-3xl">Sup <i className="fas fa-virus"></i></h1>
        </div>
        <button onClick={open} className="font-thin">
          <i className="fas fa-2x fa-bars">
          </i>
        </button>
        <ul aria-controls="false" className="Navigation transition duration-700 ease-out absolute left-0 top-7 w-full 0px mt-10 bg-regal-blue p-4 text-3xl  flex justify-center items-stretch flex-col gap-9">
          <li>
            <Link to="/">
              Create
           </Link>

          </li>
          <li>
            <Link to="/read" >
              Read
           </Link >

          </li>
          <li>
            <Link to="/update">
              Update
           </Link>

          </li>
        </ul>


      </nav>
    </React.Fragment>
  )
}

export default Navbar;
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/react-fontawesome