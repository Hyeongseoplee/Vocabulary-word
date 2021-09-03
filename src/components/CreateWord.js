import { useRef, useState } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch"; 

export default function CreateWord() {
    const days = useFetch('http://localhost:3001/days');
    const history = useHistory();
    const [ isLoading, setLoading ] = useState(false);

    function onSubmit(e) {
        e.preventDefault();

        if(!isLoading){ // isLoading이 false일 때
            setLoading(true);
        fetch(`http://localhost:3001/words`, {
            method : "POST",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                day : Number(dayRef.current.value),
                eng : engRef.current.value,
                kor : korRef.current.value, 
                isDone : false,
            })
            })
            .then( res => {
                if(res.ok) {
                    alert(`success to make new word!`);
                    history.push(`/words/${dayRef.current.value}`);
                    setLoading(false);
                }
            })
            }
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
                <button style={{ opacity : isLoading ? 0.5 : 1}}>
                    { isLoading === true ? "loading.." : "저장"}
                    </button>
            </form>
        )
}