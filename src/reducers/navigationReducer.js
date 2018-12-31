export default function reducer(state={
    path: "DEFAULT",
    loaded: true
}, action) {

    switch(action.type) {
        case "SET_NAVIGATION" : {
            return {...state, path: action.payload}
        }

        default:
            return state;
    }
}