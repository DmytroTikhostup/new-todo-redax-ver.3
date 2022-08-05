const defaultState = {
    createdCounter: 0,
    editedCounter: 0,
    deletedCounter: 0,
};

const CounterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO_COUNT':
            return { ...state, createdCounter: state.createdCounter + action.payload };

        case 'EDIT_TODO_COUNT':
            return { ...state, editedCounter: state.editedCounter + action.payload };

        case 'DELETE_TODO_COUNT':
            return { ...state, deletedCounter: state.deletedCounter + action.payload };

        default:
            return state;
    }
};

export default CounterReducer;
