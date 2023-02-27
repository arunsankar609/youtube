import { createSlice } from "@reduxjs/toolkit";

const VideoSlice=createSlice({
    name:"videoLink",
    initialState:{
        videoLin:""
    },
    reducers:{
        getVideoId:(state,action)=>{
        state.videoLin=action.payload
        }
    }
})
export const {getVideoId} = VideoSlice.actions
export default VideoSlice.reducer