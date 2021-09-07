export const add = (value) => {
    return{
        type: "ADD",
        payload: value
    };
};

export const del = (value) =>{
    return{
        type: 'DELETE',
        payload: value
    }
}