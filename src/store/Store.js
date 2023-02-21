import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
import VideoSlice from "./VideoSlice";
import SearchSlice from "./SearchSlice";
import ChatSlice from "./ChatSlice";
export const store = configureStore({
  reducer: {
    navBar:NavSlice,
    videoLink:VideoSlice,
    search:SearchSlice,
    chat:ChatSlice
  },
});
