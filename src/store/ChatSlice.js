import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState:{messages:[]},
  reducers: {
    getChat: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const {getChat}=ChatSlice.actions
export default ChatSlice.reducer