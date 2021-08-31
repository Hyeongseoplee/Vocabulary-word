import React,  { useState} from 'react';

function Word({word}) {
    const [isShown, setShown] = useState(false);

    function toggleShown() {
        setShown(!isShown);
    }

    console.log(isShown);
    return(
        <tr>
            <td>
                <input type="checkbox"></input>
            </td>
                <td>{word.eng}</td>
                <td>{isShown && word.kor}</td>
            <td>
                <button onClick={ toggleShown }>뜻 {isShown === true ? "숨기기" : "보기"  }</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    )
}

export default Word;