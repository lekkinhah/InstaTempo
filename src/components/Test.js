import React, {useState} from 'react';
import { 
  Text,
  TextInput,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import { Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../services/api'; 
import apiKey from '../utils/apiKey';
import axios from 'axios';

const Test = ({ lele }) => { 

  const [temp, setTemp] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');
  const [cityName, setCityName] = useState('');
  const [lang, setLang] = useState('pt');
  const [units, setUnits] = useState('metric');

  handleSearch = async () => {
    

      if(cityName === '') {setCityName('pelotas');}
      console.log("city", cityName);
      console.log("units", units);
      console.log("lang", lang);

      

     let res = await axios.get(`${api}weather?q=${cityName}&APPID=${apiKey}&units=${units}&lang=${lang}`)
     console.log(res.data);

      setTemp(res.data.main.temp);
      setWeatherIcon(res.data.weather[0].icon)
  }
  
  
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input containerStyle={[{width:'50%'}]} inputStyle={styles.inputText} placeholder="Cidade" value={cityName} onChangeText={(aux) => setCityName(aux)} />
          <Button 
            icon={<Icon name='search' type='font-awesome' size={20} color='#ffffff' />} 
            inputStyle={styles.btn} onPress={handleSearch}  />
        </View>
        
        <Text>{cityName}</Text>
        <Text>{temp} C°</Text>
         <Image 
          style={{width: 100, height: 100}}
          source={{uri: `http://openweathermap.org/img/wn/${weatherIcon}.png`}}
        />
        <Text>Descrição</Text>
        <Text>Vento</Text>
        <Text>umidade</Text>
        <Text>5 dias da semana</Text>
        <Text>Lelê? {lele}</Text>

        {//cityList.filter(city => city.name.includes(search)).splice(0, 2).map(city => {
          //return <Text>{city.name}</Text> })
        }
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

export default Test;