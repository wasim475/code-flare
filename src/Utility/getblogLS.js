import toast from 'react-hot-toast'

export const getBlogLS = ()=>{
    let blogs = []
    const getBlog = localStorage.getItem("blogs")
    if(getBlog){
        blogs = JSON.parse(getBlog)
    }
    return blogs
}

export const saveBlogLS = (blog)=>{
    const saveB = getBlogLS()
    const isExist = saveB.find((blg)=>blg.id === blog.id)
    if(isExist){
        return toast.error("already in book mark")
    }
    saveB.push(blog)

    localStorage.setItem('blogs', JSON.stringify(saveB))

    toast.success("blog bookmarked.")

}

export const deleteBlog = (id)=>{
    let blogs = getBlogLS()
    const remainingBlog = blogs.filter((blog)=>blog.id !== id)
    localStorage.setItem("blogs", JSON.stringify(remainingBlog))
    toast.success("blog hasbeen deleted.")
}

