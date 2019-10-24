import React, { useState } from 'react';
import {View, ScrollView} from 'react-native';
import TextSearch from './components/textSearch';
import TempCard from './components/tempCard';

const App = () => {
    const [results, setResults] = useState([]);

    return (
      <View style={{ flex: 1 }}>
        <TextSearch aoBuscar={(result) => setResults([ ...results, result])}></TextSearch>
        <ScrollView>
          {results.map(searchResult => (
            <TempCard 
              city={searchResult.name} 
              temp={searchResult.main.temp} 
              weatherIcon={searchResult.weather[0].icon} 
              description={searchResult.weather[0].description} 
              wind={searchResult.wind.speed} 
              humidity={searchResult.main.humidity}>

            </TempCard> 
          ))}
        </ScrollView>
      </View>
    );
}

export default App;