import React from 'react';
import { Link } from 'react-router-dom';

function EmptyPage() {
    return (
        <>
        <h1>Page not found</h1>
        <Link to="/">Back to home</Link>
        </>
    )
}

export default EmptyPage;