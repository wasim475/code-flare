import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSingleBlog } from './getSingleBlog';

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const sBlog = createAsyncThunk("sBlog",
    async()=>{
        const singleB = getSingleBlog()
        return singleB
    }
)

const singleBlogSlice = createSlice({
    name:"singleBlog",
    initialState:{
        singleBlogData: [],
        isLoading: false,
        isError: false,
        errorMassage: null
    },
    extraReducers:(builder)=>{
        builder.addCase(sBlog.pending, state=>{
            state.isLoading= true,
            state.isError= false
        }).addCase(sBlog.fulfilled, (state,action)=>{
            state.isLoading= false,
            state.isError = false,
            state.singleBlogData = action.payload
        }).addCase(sBlog.rejected, (state,action)=>{
            state.isLoading = false,
            state.errorMassage = action.error?.message
        })
    }
})

export default singleBlogSlice.reducer