import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Word from './Word';

function Words() {
    const { day } = useParams();

    // const wordsList = words.filter((word) => {
    //     return word.day === Number(day)
    // })

    const [ words, setWords ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res => res.json())
        .then(datas => setWords(datas))
    }, [day])

    return(
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {words.map((word) => {
                    return (
                            <Word key={word.id} word={word}/>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Words;