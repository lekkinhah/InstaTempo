import React, { useState} from 'react';
import axios from 'axios';
import {baseURL} from '../services/api'; 
import apiKey from '../utils/apiKey';
import {View, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const textSearch = ({units = 'metric', lang='pt', onSearch}) => {


const [cityName, setCityName] = useState('');
const [temp, setTemp] = useState('');
const [weatherIcon, setWeatherIcon] = useState('');


handleSearch = async () => {
  
  console.log("city", cityName);
  console.log("units", units);
  console.log("lang", lang);

  let res = await axios.get(`${baseURL}weather?q=${cityName}&APPID=${apiKey}&units=${units}&lang=${lang}`);
  console.log(res.data);
  let resMulti =  await axios.get(`${baseURL}forecast?id=${res.data.id}&APPID=${apiKey}&units=${units}&lang=${lang}`);
  console.log("dentro do search", resMulti);

  const resFilter = resMulti.data.list.filter(item => item.dt_txt.includes('12:00:00'));
  console.log("filtro", resFilter);

    const result = {
      searchDt:res.data.dt,
      cityId: res.data.id,
      city: res.data.name,
      temp: res.data.main.temp, 
      weatherIcon: res.data.weather[0].icon,
      description: res.data.weather[0].description,
      wind:res.data.wind.speed,
      humidity:res.data.main.humidity,
      listTemp: resFilter,
    }
console.log(result);
  if (onSearch)
    onSearch(result);

  setTemp(res.data.main.temp);
  setWeatherIcon(res.data.weather[0].icon)
}

  return (
    <View style={styles.inputContainer}>
      <Input containerStyle={[{width:'60%', justifyContent:"center"}]} inputStyle={styles.inputText} placeholder="Cidade" value={cityName} onChangeText={(aux) => setCityName(aux)} />
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
    flex:1,
    height:12
  },
  btn: {
    flex:1,
  }

});

export default textSearch;