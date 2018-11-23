import * as Actions from 'actions/App';

const initialState = {
    toast: {
        message: '',
        isOpen: false
    },
    theme: 'transparent'
};

export default (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case Actions.SET_THEME:
            return {
                ...state,
                theme: action.theme
            };
        default:
            return state;
    }
};