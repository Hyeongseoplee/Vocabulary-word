import { useRef } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch"; 

export default function CreateWord() {
    const days = useFetch('http://localhost:3000/days');
    const history = useHistory();

    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/words`, {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            eng : engRef.current.value,
            kor : korRef.current.value, 
            day : dayRef.current.value,
            isDone : false
        })
        }).then( res => {
            if(res.ok) {
                alert(`success to make new word!`)
                history.push(`/words/${dayRef.current.value}`)
            }
        })
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return (
            <form onSubmit={onSubmit}>
                <div className="input_area">
                    <label>Eng</label>
                    <input type="text" placeholder="cat" ref={engRef}></input>
                </div>
                <div className="input_area">
                    <label>Kor</label>
                    <input type="text" placeholder="냥냥이" ref={korRef}></input>
                </div>
                <div className="input_area">
                    <label>Day</label>
                    <select ref={dayRef}>
                        {days.map((day) => {
                            return <option key={day.id}>{day.day}</option>
                        })}
                    </select>
                </div>
                <button>저장</button>
            </form>
        )
}