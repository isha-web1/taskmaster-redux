import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    task : [],
}

const taskSlice = createSlice({
    name : 'taskSlice',
    initialState,
    reducers : {
        addTask : (state, {payload})=>{
            if(state.task.length === 0){

                state.task.push({id: 1, ...payload})
            } else{
                const lastElement = state.task.at(-1);
                state.task.push({id: lastElement.id + 1, ...payload})
            }
        }
    },
});
export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;