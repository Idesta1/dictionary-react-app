import React, { useState } from 'react';
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary() {
    const[keyword, setKeyword] = useState("Sunset");
    const[results, setResults] = useState(null);
    

    function handleResponse(response){
       setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
      
    
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
        
    }
    function handleKeywordChange(event){
        setKeyword(event.target.value);

    }
   
      return( 
       <div className="Dictionary">
            <p>Insert any word...</p>
            <section>
           <form onSubmit={search}>
               <div className="row">
               <div className="col-9">
                <input type="search" className="form-control" placeholder="Search for a word..." onChange={handleKeywordChange}/> 
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-info" />
                </div> 
                </div>
                </form>
                </section> 
               <Results results={results} />
           
            </div>  
     
    );
} 