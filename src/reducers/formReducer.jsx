import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        addForm: (state, action) => [
            ...state,
            {
                text: action.payload,
                id: Math.random() * 1000,
                completed: false,
                background: '#' + Math.floor(Math.random() * 16777215).toString(16),
            },
        ],
        fetchForm: (state, action) =>
            action.payload.map((item) => ({
                ...item,
                background: '#' + Math.floor(Math.random() * 16777215).toString(16),
            })),
        completeForm: (state, action) =>
            state.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            }),
        deleteForm: (state, action) => state.filter((item) => item.id !== action.payload),
        editForm: (state, action) =>
            state.map((item) => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        text: action.payload.text,
                    };
                }
                return item;
            }),
    },
});

export const { addForm, completeForm, deleteForm, editForm, fetchForm } = formSlice.actions;

export default formSlice.reducer;
