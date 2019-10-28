import React, { useState } from 'react';
import {View, ScrollView} from 'react-native';
import Routes from './components/Routes';

if(Platform.OS === 'android') { 
  // Config Intl Polyfill https://github.com/andyearnshaw/Intl.js (only android needs polyfill)
  require('intl'); // import intl object
  require('intl/locale-data/jsonp/pt-BR'); // load the required locale details
  //Intl.__disableRegExpRestore(); // for syntaxerror invalid regular expression unmatched parentheses
}

const App = () => {
 
  return (
      <Routes />
    );
}

export default App;