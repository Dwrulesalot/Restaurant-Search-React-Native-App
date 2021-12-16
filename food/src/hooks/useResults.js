import { useEffect, useState } from "react";
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    //this is asychnc, could also use promise/ .then()
    const searchApi = async (searchTerm) => { 
      console.log('searchApi called');
      try {
        const response = await yelp.get('/search', {
          params: {
            limit:50, //this addsthe text '?limit=50' to the end of the api search call
            term: searchTerm,
            location: 'toronto'
          }
        });
        setResults(response.data.businesses);
      } catch(err){
        setErrorMessage('Something went wrong :(')
      }
  
    };
    
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};