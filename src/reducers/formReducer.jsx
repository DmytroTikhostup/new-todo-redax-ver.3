const defaultState = {
    todo: '',
};

const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CREATE_FORM':
            return { ...state, todo: action.payload };
        default:
            return state;
    }
};
export default formReducer;
