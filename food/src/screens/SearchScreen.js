import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  //this is asychnc, could also use promise/ .then()
  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit:50, //this addsthe text '?limit=50' to the end of the api search call
          term: searchInput,
          location: 'toronto'
        }
      });
      setResults(response.data.businesses);
    } catch(err){
      setErrorMessage('Something went wrong :(')
    }

  };

  return (
    <View>
      <SearchBar 
      searchInput={searchInput} 
      onSearchChange={setSearchInput} 
      onSearchSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> :null}
      <Text>We have found {results.length} results! </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
