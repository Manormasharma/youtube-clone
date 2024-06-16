import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
    name: "nav",
    initialState :{
        isMenuOpen: true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        }
    }
})
export const {toggleMenu,closeMenu} = NavSlice.actions;
export default NavSlice.reducer;