export const tableReducer = (state = [], action) => {


    switch (action.type) {
        case "SET_UNIVERSITIES":
            return [state, ...action.payload]
        default:
            return state;
    }

}