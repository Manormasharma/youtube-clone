import { createSlice } from "@reduxjs/toolkit";

const NavSlice = createSlice({
    name: "nav",
    initialState :{
        isMenuOpen: true
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})
export const {toggleMenu} = NavSlice.actions;
export default NavSlice.reducer;