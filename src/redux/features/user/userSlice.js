import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : 'isha ali',
    email : 'isha@web.com',
    userTask : [],
};

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers : {},
})

export default userSlice.reducer;