import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';



const SearchScreen = () => {
    
  const [searchInput, setSearchInput] = useState('');

  const [searchApi, results, errorMessage] = useResults();

  console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter( result => {
      return result.price === price;
    });
  };
  
  return (
    <View>
      <SearchBar 
      searchInput={searchInput} 
      onSearchChange={setSearchInput} 
      onSearchSubmit={() => searchApi(searchInput)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> :null}
      <Text>We have found {results.length} results! </Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Middle Ground" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Money go Brrrrrr" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
