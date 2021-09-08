const addReducer = (state = [], action) => {
    switch(action.type){
        case "ADD":
            state.push(action.payload);
            // console.log(state);
            return state;
        case "DELETE":
            return state.filter(one => one!==action.payload);
        case "FETCH":
            state.push(action.payload);
            console.log(action.payload);
            return state;
        default:
            return state;
    }
}
export default addReducer;
