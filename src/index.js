import React, { useState } from 'react';
import {View, ScrollView} from 'react-native';
import TextSearch from './components/textSearch';
import TempCard from './components/tempCard';

if(Platform.OS === 'android') { 
  // Config Intl Polyfill https://github.com/andyearnshaw/Intl.js (only android needs polyfill)
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/pt-BR'); // load the required locale details
  //Intl.__disableRegExpRestore(); // for syntaxerror invalid regular expression unmatched parentheses
}

const App = () => {
    const [results, setResults] = useState([]);

    return (
      <View style={{ flex: 1 }}>
        <View style={{justifyContent:"center"}}>
        <TextSearch onSearch={(result) => setResults([ ...results, result])}></TextSearch>
        </View>
        <ScrollView contentContainerStyle={{flexDirection:"column-reverse"}}>
          {results.map(searchResult => (
            
            <TempCard res={searchResult} /> 
             
          ))}
        </ScrollView>
       
      </View>
    );
}

export default App;

//<TempCard
//cityId={searchResult.id}
//city={searchResult.name} 
//temp={searchResult.main.temp} 
//weatherIcon={searchResult.weather[0].icon} 
//description={searchResult.weather[0].description} 
//wind={searchResult.wind.speed} 
//humidity={searchResult.main.humidity}>
//</TempCard> 