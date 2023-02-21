import { createSlice } from "@reduxjs/toolkit";

const VideoSlice=createSlice({
    name:"videoLink",
    initialState:{
        videoLin:"zxczxc"
    },
    reducers:{
        getVideoId:(state,action)=>{
         return state.videoLin=action.payload
        }
    }
})
export const {getVideoId} = VideoSlice.actions
export default VideoSlice.reducer