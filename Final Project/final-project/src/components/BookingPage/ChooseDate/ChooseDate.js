import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ChooseDate.css";
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";

export default function ChooseDate({stepForwards}) {
  const [value, setValue] = useState(null);
  const [dates, setDates] = useState([]);

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };

  useEffect(() => {
    const date = new Date();
    const data = fetchAPI(date); // direct call
    setDates(data);
  }, []);
  
  return (
    <div className="choose-date-col">
      <h2>Choose Date</h2>
      <Calendar onChange={setValue} value={value} />
      
      {value &&
      <>
      <h2>Date Selected: {value.toLocaleDateString()}</h2>
      <div className="buttons-grid">
        {dates.map((e,i) => (
          <TertiaryButton key = {i} text = {e} onClick ={() => stepForwards()}/>
        ))}
      </div> </>}
    </div>
  );
}