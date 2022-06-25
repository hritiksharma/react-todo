import { useState } from "react";
import "./App.css";
import CourseInput from "./components/CourseInput/CourseInput";

function App() {
  const [tasks, setTask] = useState([
    { text: "Get up early in the morning", id: "g1" },
    { text: "WorkOut Daily", id: "g2" },
  ]);

  let content = (
    <p style={{ textAlign: "center" }}>NO Goals Found. May be Add one </p>
  );

  if (tasks.length > 0) {
    content =  (  )
  }

  const onAddGoal = () => {};

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={onAddGoal} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
}

export default App;
