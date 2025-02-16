import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { MdBookmarkAdd } from "react-icons/md";


const Tab = ({id}) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleBookMark = (blogId)=>{
    console.log(blogId)
  }
  return (
    <>
      <div
        className={`flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800`}
      >
        <Link
          to={"content"}
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          }  rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Content</span>
        </Link>
        <Link
          to={"author"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          }  rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Author</span>
        </Link>
        <div onClick={()=>handleBookMark(id)} className=" rounded-full p-2 overflow-hidden hover:scale-105 ml-5 bg-primary opacity-20 hover:opacity-30 cursor-pointer">
          <MdBookmarkAdd size={20} className='text-red-500'/>
        </div>
      </div>
      <section>
        <Outlet/>
      </section>
    </>
  );
};

export default Tab;
