import React from 'react';
import dummy from '../db/data.json';
import { Link } from "react-router-dom";

function Daylist() {
    const days  = dummy.days;
    return (
        <ul className="days">
            {days.map((day, key) => {
                return (
                    <li key={day.id}> 
                        <Link to={`/words/${day.day}`} className="day">Day {day.day}</Link>
                    </li>
                ) 
            })}
        </ul>
    )
}

export default Daylist;