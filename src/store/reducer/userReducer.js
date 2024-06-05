const initialState = {
    name: "Mohit",
    org: "Capillary",
}

const userReducer = (state = initialState, action) => {
     switch(action.type) {
        case 'ADD_USER_DETAILS': 
            return {
                ...state,
                name: action.name,
                org: action.org,
            }
        case 'REMOVE_USER_DETAILS': 
            return {
                name: "",
                org: "",
            }
        default:
            console.log('Action is not available');
            return state;
     }
}

export default userReducer;