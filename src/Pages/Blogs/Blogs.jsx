import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import BlogsCard from './BlogsCard';

const Blogs = () => {
  const [blogs, setblogs]= useState(null)
  useEffect( ()=>{
    const getData = async ()=>{
      const data = await axios.get("https://dev.to/api/articles?per_page=20&top=7")
      setblogs(data.data)
    }
    getData()
  },[])

  
  
  return (
    <>
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={blogs?.length > 0 && blogs[0]?.cover_image}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogs?.length > 0 && blogs[0]?.title}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {
                 blogs?.length && new Date(blogs[0]?.published_at).toLocaleDateString()
                }
              </span>
              <p>
                {
                  blogs?.length > 0 && blogs[0]?.description
                }
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
              blogs?.map((blog, index)=>(
                <BlogsCard
                  key={index}
                  blog={blog}
                />
              ))
            }
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
