import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "../hooks/useFetch"; 
import Word from './Word';

function Words() {
    const { day } = useParams();

    const words = useFetch(`http://localhost:3004/words?day=${day}`);

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