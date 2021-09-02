import { useEffect, useState } from 'react';

export default function useFetch(url) {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => { 
            console.log(data);
            return setData(data)
        })
    }, [url])

    return data;
}