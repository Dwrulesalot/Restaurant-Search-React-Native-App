import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';

import useResults from '../hooks/useResults';

const SearchScreen = () => {
    
  const [searchInput, setSearchInput] = useState('');

  const [searchApi, results, errorMessage] = useResults();
  
  return (
    <View>
      <SearchBar 
      searchInput={searchInput} 
      onSearchChange={setSearchInput} 
      onSearchSubmit={() => searchApi(searchInput)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> :null}
      <Text>We have found {results.length} results! </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
