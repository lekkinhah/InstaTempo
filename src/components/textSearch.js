import React, { useState} from 'react';
import axios from 'axios';
import {baseURL} from '../services/api'; 
import apiKey from '../utils/apiKey';
import {View, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const textSearch = ({units = 'metric', lang='pt', aoBuscar}) => {


const [cityName, setCityName] = useState('');
const [temp, setTemp] = useState('');
const [weatherIcon, setWeatherIcon] = useState('');


handleSearch = async () => {
  
  console.log("city", cityName);
  console.log("units", units);
  console.log("lang", lang);

  let res = await axios.get(`${baseURL}weather?q=${cityName}&APPID=${apiKey}&units=${units}&lang=${lang}`)
  console.log(res.data);
  if (aoBuscar)
    aoBuscar(res.data);

  setTemp(res.data.main.temp);
  setWeatherIcon(res.data.weather[0].icon)
}

  return (
    <View style={styles.inputContainer}>
      <Input containerStyle={[{width:'50%'}]} inputStyle={styles.inputText} placeholder="Cidade" value={cityName} onChangeText={(aux) => setCityName(aux)} />
      <Button 
        icon={<Icon name='search' type='font-awesome' size={20} color='#ffffff' />} 
        inputStyle={styles.btn} onPress={handleSearch}  />
    </View>
  );

}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: "row",
  },
  inputText: {
    fontSize: 14,
    flex:1
  },
  btn: {
    flex:1,
  }

});

export default textSearch;