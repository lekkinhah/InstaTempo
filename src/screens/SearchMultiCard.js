import React, { useState } from 'react';
import {View, ScrollView} from 'react-native';
import TextSearch from '../components/textSearch';
import TempCard from '../components/tempCard';


const SearchMultiCard = () => {
 
  const [results, setResults] = useState([]);
  
  const onDelete = (item) => {
    setResults(results.filter(i => i.cityId !== item));
  }
  
    return (
      <View style={{ flex: 1 }}>
        <View style={{justifyContent:"center"}}>
        <TextSearch onSearch={(result) => {
            let addNewCard = true;
            for (let i = 0; i < results.length; i++) {
              if (results[i].cityId == result.cityId)
              addNewCard = false;
            }

            if (addNewCard)
              setResults([ ...results, result]);
        }} />
        </View>
        
        <ScrollView contentContainerStyle={{flexDirection:"column-reverse"}}>
          {results.map(searchResult => (
              <TempCard data={searchResult} key={searchResult.cityId} onDelete={onDelete} />              
          ))}
        </ScrollView>
      </View>
    );
}

export default SearchMultiCard;