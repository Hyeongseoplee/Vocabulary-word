import React,  { useState } from 'react';

function Word({word : w}) {
    const [ word, setWord ] = useState(w);
    const [ isShown, setShown] = useState(false);
    const [ isDone, setDone ] = useState(word.isDone);

    function toggleShown() {
        setShown(!isShown);
    }

    function toggleDim (){
        fetch(`http://localhost:3001/words/${word.id}`, {
            method : "PUT",
            headers : {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone
            })
            }).then( res => {
                if(res.ok) {
                    setDone(!isDone)
                }
                console.log(isDone)
            })};
    
            function del() {
                if(window.confirm("Do you want to delete this?")){
                    fetch(`http://localhost:3001/words/${word.id}`,{
                        method : "DELETE"
                    }).then( 
                        res => {
                        if(res.ok) {
                            setWord( {id : 0});
                        }
                    })
                }
            }

            if(word.id === 0) {
                return null
            }

    return(
        <tr className={isDone ? "off" : ""}>
            <td>
                <input type="checkbox" onChange={ toggleDim } checked={isDone}></input>
            </td>
                <td> {word.eng}</td>
                <td>{isShown && word.kor}</td>
            <td>
                <button 
                    onClick={ toggleShown }>뜻 {isShown === true ? "숨기기" : "보기"  }</button>
                <button className="btn_del" onClick={ del }>삭제</button>
            </td>
        </tr>
    )
}

export default Word;