import React from 'react';
import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';
import Word from './Word';

function Words() {
    const words  = dummy.words;
    const day = useParams().day;
    const wordsList = words.filter((word) => {
        return word.day === Number(day)
    })
    return(
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordsList.map((word) => {
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