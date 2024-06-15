import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";

const store = configureStore({
   reducer:{
        nav : NavSlice,
   }
})

export default store