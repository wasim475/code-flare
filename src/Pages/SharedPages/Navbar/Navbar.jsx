import { Link, NavLink } from "react-router";
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
          <ul className=" flex gap-x-4 px-1">
            <li>
              <NavLink to={"/"} className={({isActive})=> isActive ? 'text-primary font-bold underline': "font-normal"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"blogs"} className={({isActive})=> isActive ? 'text-primary font-bold underline': "font-normal"}>Blogs</NavLink>
            </li>
            <li>
              <NavLink to={"bookmark"} className={({isActive})=> isActive ? 'text-primary font-bold underline': "font-normal"}>Bookmarks</NavLink>
            </li>
          </ul>
         <Theme/>
        </div>
      </div>
    </>
  );
};

export default Navbar;
