import axios from 'axios'
export const add = (value) => {
    return{
        type: "ADD",
        payload: value
    };
};

// export const fetch = () => {
//     const request = axios.get("https://jsonplaceholder.typicode.com/users");

//     return dispatch =>{
//         request.then((data) =>{
//             dispatch({
//                 type: "FETCH",
//                 payload: data
//             })
//         })
//     };
// }

export const fetch = () => {
    return async (dispatch) => {
        const request = axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({
            type:"FETCH",
            payload: request.data
        })
    }
}

export const del = (value) =>{
    return{
        type: 'DELETE',
        payload: value
    }
}