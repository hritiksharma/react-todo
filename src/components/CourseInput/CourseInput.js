import React, { useState } from "react";
import Button from "../UI/Button/Button";
import "./CourseInput.css";
const CourseInput = (props) => {
  const [addInput, setAddInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(addInput);
  };

  const handleInput = (event) => {
    setAddInput(event.target.value);
    console.log(addInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label> Course Goal.. </label>
        <input type="text" name="task" onChange={handleInput} />
      </div>
      <Button type="submit">Add Goal </Button>
    </form>
  );
};

export default CourseInput;
