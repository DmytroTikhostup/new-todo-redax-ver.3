const defaultState = { list: [] };

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'DELETE_TODO':
            return { ...state, list: state.list.filter((el) => el.id !== action.payload) };

        case 'EDIT_TODO':
            return {
                ...state,
                list: state.list.map((el) => (el.id === action.payload.id ? { ...el, edit: !el.edit, text: action.payload.value } : el)),
            };

        case 'COMPLETE_TODO':
            return {
                ...state,
                list: state.list.map((el) => (el.id === action.payload ? { ...el, completed: !el.completed } : el)),
            };

        default:
            return state;
    }
};
export default todoReducer;
