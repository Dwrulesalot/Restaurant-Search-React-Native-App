import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons'; 

const SearchBar = ({searchInput, onSearchChange, onSearchSubmit}) => {

  
  
  return (
    <View style={styles.background}>
      <Ionicons name="search" style={styles.iconStyle} color="black" />
      <TextInput 
      autoCapitalize='none'
      autoCorrect={false}
      placeholder='Search' 
      style={styles.inputStyle}
      value={searchInput}
      onChangeText={onSearchChange}
      onEndEditing={onSearchSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#D5D5D5',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 40,
        alignSelf: 'center'
    }
});

export default SearchBar;
