import { createSlice } from "@reduxjs/toolkit";

const TestSlice = createSlice({
    name: 'Test',
    initialState:"",
    reducers: {
        Test: (state, action)=>{
           return state = action.payload 
        }
    }
}
)

export const {Test} = TestSlice.actions
export default TestSlice.reducer;