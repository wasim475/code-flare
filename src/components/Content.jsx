import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { sBlog } from "../Feature/singleBlogSlice";
import placeholderImage from "../assets/404.jpg"
const Content = () => {
  const { id } = useParams();
  const { errorMassage, isError, isLoading, singleBlogData } = useSelector(
    (state) => state.singleBlog
  );

  const singleBlogDispatch = useDispatch();

  useEffect(() => {
    singleBlogDispatch(sBlog());
  }, [singleBlogDispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const singleBlog = singleBlogData.find((blog) => blog.id === parseInt(id));

  if (!singleBlog) {
    return <h1>Loading...</h1>;
  }
  // console.log(singleBlog)

  const {
    comments_count,
    cover_image,
    created_at,
    crossposted_at,
    description,
    edited_at,
    language,
    last_comment_at,
    path,
    positive_reactions_count,
    public_reactions_count,
    published_at,
    published_timestamp,
    readable_publish_date,
    reading_time_minutes,
    slug,
    social_image,
    subforem_id,
    tag_list,
    tags,
    title,
    type_of,
    url,
    user,
  } = singleBlog;

  // console.log(cover_image);

  return (
    <>
      <div
        className="mx-auto group hover:no-underline dark:bg-gray-50 border-2 p-2 rounded-sm"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image || placeholderImage}
        />
       <div className='mt-5'>
       {
          tag_list.map((tag)=>(
            <a key={tag} href="#">#{tag}</a>
          ))
        }
       </div>
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {title}
          </h3>
         <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Content;
