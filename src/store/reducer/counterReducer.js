const initialState =  {
    count: 0
};

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return {
                ...state,
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1
            }
        case 'INCREMENT_BY_X':
            console.log('chekc the paload', action);
            return {
                ...state,
                count: state.count + action.incrementBy
            }
        default:
            console.log('Nothing has been selected');
            return state;
    }
}

export default countReducer;

