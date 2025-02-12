import { Link } from "react-router";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-screen-lg">
            <h1 className="text-5xl font-bold">
              WelCome to
              <span className='bg-gradient-to-r bg-300% from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient'>
              <span className=""> Code</span>
              <span className="">Flare</span>
              </span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex gap-x-4 justify-center">
              <Link to={"/blogs"} className="relative inline-block px-4 py-2 font-medium group">
               
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
                  <span className="relative text-primary group-hover:text-white">
                    Read blog
                  </span>
                
              </Link>

              <Link to={"/bookmark"} className="relative inline-block px-4 py-2 font-medium group">
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-secondary"></span>
                  <span className="relative text-secondary group-hover:text-white">
                    Bookmarks
                  </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
