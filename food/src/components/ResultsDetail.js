import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({result}) => {
    
    return <Text>{result.name} </Text>;//gives an error if a view and not a text object?
      
  };
  
  const styles = StyleSheet.create({
      
  });
  
  export default ResultsDetail;