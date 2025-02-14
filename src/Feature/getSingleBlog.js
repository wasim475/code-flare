import axios from 'axios';

export const getSingleBlog = async ()=>{
    const data = await axios.get("https://dev.to/api/articles?per_page=20&top=7");
        return data?.data
}