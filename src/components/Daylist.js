import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Daylist() {
    const [ days, setDays ] = useState([]);

function chageDays() {
    setDays([
        ...days,
        {
            id : Math.random(),
            day : 1,
        }
    ])
}

    useEffect(() => {
        fetch('http://localhost:3001/days')
        .then(res => res.json())
        .then(data => {
            setDays(data);
        })
    }, [])

    return (
        <>
            <ul className="days">
                {days.map((day, key) => {
                    return (
                        <li key={day.id}> 
                            <Link to={`/words/${day.day}`} className="day">Day {day.day}</Link>
                        </li>
                    ) 
                })}
            </ul>
            <button onClick={ chageDays }>Chage Day</button>
        </>
    )
}

export default Daylist;