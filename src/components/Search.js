import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { actionTypes } from '../reducer';

function Search({ hidebuttons = false }) {
    const searchOptions = ["Tata", "tcs", "tata Services", "ValidLog careers", "validLog", "Mahindra", "apple store", "google play store"];
    const [matchedVal, setMatchedVal] = useState([]);
    const [state, dispatch] = useStateValue();

    const [inputVal, setInputVal] = useState('');
    const history = useHistory();

    useEffect(() => {

        let matchedValArray = [];
        let searchVal = inputVal.toLowerCase();
        searchOptions.forEach(val => {
            let currentValInArray = val.toLowerCase();
            if (currentValInArray.indexOf(searchVal) !== -1) {
                matchedValArray.push({
                    start: currentValInArray.indexOf(searchVal),
                    end: currentValInArray.indexOf(searchVal) + searchVal.length - 1, value: val
                });
            }
        });
        setMatchedVal(matchedValArray);
        console.log(matchedVal);


    }, [inputVal])

    const search = (e) => {
        if (e.key === 'Enter' && inputVal !== '') {
            e.preventDefault();
            setMatchedVal([]);
            dispatch({ type: actionTypes.SET_SEARCH_TERM, searchTerm: inputVal });
            history.push('/search');
        }

    }
    return (
        <div className="search">
            <div className="searchInput">
                <SearchIcon />
                <input placeholder="Search Google or Type a URL"
                    onChange={e => setInputVal(e.target.value)}
                    onKeyPress={e => search(e)}
                    value={inputVal} />
                <MicIcon />
            </div>

            {
                matchedVal.length > 0 && inputVal !== '' && <div className="matchedSearch"> {matchedVal.map(data => {
                    return (
                        <div>
                            {data.start > 0 && data.value.slice(0, data.start)}
                            <span className="highlite">{data.value.slice(data.start, data.end + 1)}</span>
                            {data.end >= 0 && data.value.slice(data.end + 1, data.value.length)}
                        </div>
                    );
                })} </div>

            }
            {
                !hidebuttons
                &&
                <div className="buttons">
                    <Button variant="outlined" className="btn" onClick={search}>Google Search</Button>
                    <Button variant="outlined" className="btn">I'm feeling Lucky</Button>
                </div>

            }

        </div>
    )
}

export default Search
