import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { del } from '../../redux/action';


export default function Display() {


    const todo = useSelector(state => state);
    useEffect(() => {
        console.log(todo);
    },[todo])
    const dispatch = useDispatch();
    console.log(todo);

    return (
        <div>
            {todo.map((one) => {
                return <h1 style={{cursor:'pointer'}} onClick={() =>{ dispatch(del(one))}} key={one}>{one}</h1>
            })}

            <button onClick={() =>{ dispatch(fetch())}}>Click</button>
        </div>
    )
}
