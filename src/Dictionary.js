import React, { useState } from 'react';
import './Dictionary.css';

export default function Dictionary() {
    const[keyword, setKeyword] = useState(null);

    function search(event){
        event.preventDefault();
        alert(`Searching for the word ${keyword}`);
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }
    return(
        <div className="Dictionary">
            <h1>Dictionary</h1>
            <form onSubmit={search}>
                <input type="search" placeholder="Search for a word..." className="form-control" onChange={handleKeywordChange} />
                <input type="submit" text="Search" className="btn btn-primary"/>
            </form>
            </div>
    );
}