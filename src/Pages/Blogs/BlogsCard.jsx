import React from "react";
import { Link } from "react-router";
import placeholderImage from "../../assets/404.jpg";
import { RxCrossCircled } from "react-icons/rx";

const BlogsCard = ({ blog, deleteable }) => {
  const { title, cover_image, published_at, description, id } = blog;
  return (
    
      <div className='relative max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 border-2 transition hover:scale-105 border-primary hover:border-secondary rounded-sm'>
        <Link
          to={`/blogs/${id}`}
          className=""
        >
          <img
            role="presentation"
            className="object-cover w-full rounded h-44 dark:bg-gray-500"
            src={cover_image || placeholderImage}
          />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs dark:text-gray-600">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
      {deleteable && (
      <div onClick={()=>handleDelete} className="bg-primary absolute w-6 h-6 rounded-full flex justify-center items-center cursor-pointer top-0 right-0">
        <RxCrossCircled className="text-secondary" />
        </div>
      )}
      </div>
    
  );
};

export default BlogsCard;
