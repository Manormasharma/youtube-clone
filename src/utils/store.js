import { configureStore } from "@reduxjs/toolkit";
import NavSlice from "./NavSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
   reducer:{
        nav : NavSlice,
        search : SearchSlice,
   }
})

export default store