import React, { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "bb842d1d4e1995e79";

const useGoogleSearch = (searchTerm) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        (async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${searchTerm}`)
                .then(res => res.json())
                .then(result => {
                    setData(result);
                });
        })();
    }, [searchTerm]);
    return { data };
}

export default useGoogleSearch;
