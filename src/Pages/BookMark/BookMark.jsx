import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
import { getBlogLS } from '../../Utility/getblogLS'
import Loader from '../../components/Loader'
import BlogsCard from '../Blogs/BlogsCard'


const BookMark = () => {
 const [bookmarkData, setBookMarkData]= useState(null)
 useEffect(()=>{
  const data = getBlogLS()
  setBookMarkData(data)
 },[])
 if(!bookmarkData){
  return <Loader/>
 }
 console.log(bookmarkData)
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
