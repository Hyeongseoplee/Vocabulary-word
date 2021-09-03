import { Link } from "react-router-dom";
import React from 'react';

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">
                <Link to="/">토익 영단어 (고급)</Link>
            </h1>

            <div className="header__menu">
                <button>
                    <Link to='create_word'>단어추가</Link>
                </button>
                <button>
                    <Link to='create_day'>Day 추가</Link>
                </button>
            </div>
        </header>
    )
}

export default Header;