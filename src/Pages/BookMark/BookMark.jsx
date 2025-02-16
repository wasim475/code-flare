import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { getBlogLS } from '../../Utility/getblogLS'
import Loader from '../../components/Loader'
import BlogsCard from '../Blogs/BlogsCard'
import EmptyBlog from '../../components/EmptyBlog'


const BookMark = () => {
 const [bookmarkData, setBookMarkData]= useState(null)
 useEffect(()=>{
  const data = getBlogLS()
  setBookMarkData(data)
 },[])
 if(!bookmarkData){
  return <Loader/>
 }

 if(bookmarkData.length<1){
    return <EmptyBlog message={"No Blog Found."} label={"go to blogs"} address={"/blogs"}/>
 }
 
  return (
    <div className="grid justify-center px-12 py-8 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {
      bookmarkData.map((blog, index)=>(
        <BlogsCard
          key={index}
          blog={blog}
          deleteable = {true}
          setBookMarkData={setBookMarkData}
        />
      ))
    }
  </div>
  )
}

export default BookMark
