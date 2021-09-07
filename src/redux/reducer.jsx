const addReducer = (state = [], action) => {
    switch(action.type){
        case "ADD":
            state.push(action.payload);
            return state;
        case "DELETE":
            return state.filter(one => one!==action.payload);
        default:
            return state;
    }
}
export default addReducer;
