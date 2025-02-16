export const getBlogLS = ()=>{
    let blogs = []
    const getBlog = localStorage.getItem("blogs")
    if(getBlog){
        blogs.push(JSON.parse(getBlog))
    }
    return blogs
}

export const saveBlogLS = (blog)=>{
    const saveB = getBlogLS()
    const isExist = saveB.find((blg)=>blg.id === blog.id)
    if(isExist){
        console.log("already in book mark")
    }
    saveB.push(blog)

    localStorage.setItem('blogs', JSON.stringify(saveB))

    console.log("blog bookmarked.")

}

