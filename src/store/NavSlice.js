import { createSlice } from "@reduxjs/toolkit";


export const NavSlice = createSlice({
  name: "NavBar",
  initialState : {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    }
  },
});

export const { toggleMenu,closeMenu,openMenu } = NavSlice.actions;

export default NavSlice.reducer;
