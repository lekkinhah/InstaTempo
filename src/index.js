import React, { useState } from 'react';
import {View, ScrollView} from 'react-native';
import TextSearch from './components/textSearch';
import TempCard from './components/tempCard';
import SwipeableRow from './utils/SwipeableRow';

if(Platform.OS === 'android') { 
  // Config Intl Polyfill https://github.com/andyearnshaw/Intl.js (only android needs polyfill)
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/pt-BR'); // load the required locale details
  //Intl.__disableRegExpRestore(); // for syntaxerror invalid regular expression unmatched parentheses
}

const App = () => {
 
  const [results, setResults] = useState([]);

  const onDelete = (item) => {
    setResults(results.filter(i => i.cityId !== item));
  }
 
  
    return (
      <View style={{ flex: 1 }}>
        <View style={{justifyContent:"center"}}>
        <TextSearch onSearch={(result) => {
          let podeAdd = true;

          for (let i = 0; i < results.length; i++) {
            if (results[i].cityId == result.cityId)
              podeAdd = false;
          }

          if (podeAdd)
            setResults([ ...results, result]);
        }}
         ></TextSearch>
        </View>
        <ScrollView contentContainerStyle={{flexDirection:"column-reverse"}}>
          {results.map(searchResult => (
              <TempCard data={searchResult} key={searchResult.cityId} onDelete={onDelete} />              
          ))}
        </ScrollView>
       
      </View>
    );
}

export default App;