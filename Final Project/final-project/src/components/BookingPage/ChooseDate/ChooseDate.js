import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ChooseDate.css";
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton";

export default function ChooseDate({stepForwards}) {
  const [value, setValue] = useState(new Date());

  return (
    <div className="choose-date-col">
      <h2>Choose Date</h2>
      <Calendar
        onChange={setValue}
        value={value}
      />
      <p>Selected: {value.toLocaleDateString()}</p>
      <TertiaryButton text= "CONTINUE" onClick = {() => stepForwards()}/>
    </div>
  );
}