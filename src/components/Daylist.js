import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch"; 

function Daylist() {
    const days = useFetch('http://localhost:3001/days');
    
    if(days.length === 0) {
        return <span>Loading...</span>
    }

    return (
        <>
            <ul className="days">
                {days.map((day) => {
                    return (
                        <li key={day.id}> 
                            <Link to={`/words/${day.day}`} className="day">Day {day.day}</Link>
                        </li>
                    ) 
                })}
            </ul>
        </>
    )
}

export default Daylist;