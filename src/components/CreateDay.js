import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router";

export default function CreateDay() {
    const days = useFetch('http://localhost:3001/days');

    const history = useHistory();

    function addDay() {
        fetch('http://localhost:3001/days', {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            day : days.length + 1
        })
        }).then( res => {
            if(res.ok) {
                alert(`success to make new day!`)
                history.push(`/`);
            }
        })
    }
    return (
        <>
        <h1>Current Day : ~ Day{days.length}</h1>
        <button onClick={ addDay }>저장</button>
        </>
    )
}