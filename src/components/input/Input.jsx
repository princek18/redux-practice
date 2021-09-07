import React from "react";
import "./Input.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/action";
import Display from "../display/Display";

export default function Input() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const update = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(value));
    setValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={update}
          placeholder="Enter Task"
          required
        />
        <button type="submit">Add</button>
      </form>
      {/* <Display/> */}
    </>
  );
}
