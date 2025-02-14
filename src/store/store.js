import { configureStore } from '@reduxjs/toolkit';
import singleBlogSlice from "../Feature/singleBlogSlice.js"

const store = configureStore({
    reducer:{
        singleBlog: singleBlogSlice
    }
})

export default store