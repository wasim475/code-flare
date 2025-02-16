import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Tab from '../../components/Tab';
import Loader from '../../components/Loader';

const SingleBlog = () => {
  const [blogs, setblogs] = useState(null);
  // const [singleBlog, setSingleBlog]= useState(null)
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://dev.to/api/articles?per_page=20&top=7"
      );
      setblogs(data.data);
    };
    getData();
  }, []);

  if (!blogs) {
    return <Loader/>
  }
  const singleBlog = blogs?.find((blog) => blog.id === parseInt(id));
  // console.log(singleBlog)
  const { title, published_at, cover_image, description, tag_list, tags,reading_time_minutes,user,public_reactions_count
,comments_count  } = singleBlog;

  return (
    <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <p className="text-sm">author • {new Date(published_at).toLocaleDateString()}</p>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {reading_time_minutes} min • 1,570 views
            </p>
          </div>
        </div>
        <div className="dark:text-gray-800">
          <Tab id={id} singleBlog = {singleBlog} />
        </div>
      </article>
      
      <div>
      
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Related posts</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Nunc id magna mollis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Duis molestie, neque eget pretium lobortis
              </a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:underline">
                Mauris nec urna volutpat, aliquam lectus sit amet
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
