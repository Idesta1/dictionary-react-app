import React, { useState } from 'react';
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";



import './Dictionary.css';

export default function Dictionary() {
    const[keyword, setKeyword] = useState("Sunset");
    const[results, setResults] = useState(null);
    const[photos, setPhotos] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    
  
    
    function handleResponse(response){
       setResults(response.data[0]);
       setLoading(false);
         setError(null);
      
    }

    function handleError(error) {
        setError("Sorry, we couldn't find that word. Please try another one."); 
        setResults(null);
        setPhotos(null);
    }
   
    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }


    
    function search(event){
        event.preventDefault();
        setError(null);
        setLoading(true);
        

        const trimmedKeyword = keyword.trim();
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${trimmedKeyword}`;
        axios.get(apiUrl).then(handleResponse).catch(handleError);


        let pexelsApiKey = "gmIbRyO0yfYFpL20IYevSvqhKo7FCC6N4J4VdfmVkVAxWqYXrzBqeQN3"
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${trimmedKeyword}&per_page=9`;
        
        let headers = { Authorization: `${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);

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
                <input type="search" className="form-control" placeholder="Search for a word..." onChange={handleKeywordChange} 
                value={keyword} /> 
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-info" />
                </div> 
                </div>
                </form>
                </section>   
                {loading && <div>Loading...</div>}
                {error && <div className="alert alert-danger">{error}</div>}
               <Results results={results} />
              <Photos  photos={photos} />
            </div>  
     
    );
} 