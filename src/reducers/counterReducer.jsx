import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    createdCounter: 0,
    editedCounter: 0,
    deletedCounter: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addTodo: (state, action) => ({
            ...state,
            createdCounter: state.createdCounter + action.payload,
        }),
        editTodo: (state, action) => ({
            ...state,
            editedCounter: state.editedCounter + action.payload,
        }),

        deleteTodo: (state, action) => ({
            ...state,
            deletedCounter: state.deletedCounter + action.payload,
        }),
    },
});

export const { addTodo, editTodo, deleteTodo } = counterSlice.actions;

export default counterSlice.reducer;
