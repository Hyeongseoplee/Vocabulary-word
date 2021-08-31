import React from 'react';
import dummy from '../db/data.json';
import { useParams } from 'react-router-dom';

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
                {wordsList.map((word, key) => {
                    return (
                        <tr key={word.id}>
                            <td>{word.eng}</td>
                            <td>{word.kor}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}

export default Words;