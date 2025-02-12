import { Link } from "react-router";
import { MoonSvg, SunSvg } from "../../../Utility/Svg";
import { useEffect, useState } from 'react';
import Theme from '../../../components/Theme';

const Navbar = () => {
    
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg p-4 fixed z-10 h-16">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-xl gap-0 text-secondary normal-case ">Code<span className='text-primary'>Flare</span></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"bookmark"}>Bookmarks</Link>
            </li>
          </ul>
         <Theme/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
