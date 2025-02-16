import { Link } from "react-router";

const EmptyBlog = ({ message, address, label }) => {
  return (
    <div className="min-h-[calc(100vh-116px)] flex flex-col justify-center items-center">
      <p className="text-3xl font-bold mb-6">{message}</p>
      <Link
        to={address}
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
        <span className="relative text-primary group-hover:text-white">
          {label}
        </span>
      </Link>
    </div>
  );
};

export default EmptyBlog;
