import React, { useState} from 'react';
import axios from 'axios';
import {baseURL} from '../services/api'; 
import apiKey from '../utils/apiKey';
import {StyleSheet, View} from 'react-native';
import {SearchBar, Overlay, Button, Text} from 'react-native-elements';


const TextSearch = ({units = 'metric', lang='pt', onSearch}) => {

  const [cityName, setCityName] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  handleSearch = async () => {
    setLoading(true);
    try {
          let res = await axios.get(`${baseURL}weather?q=${cityName}&APPID=${apiKey}&units=${units}&lang=${lang}`);
        
          let resMulti =  await axios.get(`${baseURL}forecast?id=${res.data.id}&APPID=${apiKey}&units=${units}&lang=${lang}`);

          const resFilter = resMulti.data.list.filter(item => item.dt_txt.includes('12:00:00'));

          const result = {
            searchDt:new Date(res.data.dt * 1000),
            cityId: res.data.id,
            city: res.data.name,
            temp: res.data.main.temp.toFixed(0), 
            weatherIcon: res.data.weather[0].icon,
            description: res.data.weather[0].description,
            wind:res.data.wind.speed,
            humidity:res.data.main.humidity,
            listTemp: resFilter.map((item)=>({dt: new Date(item.dt * 1000), icon: item.weather[0].icon})),
          }

          if (onSearch)
            onSearch(result);
    } catch (error) {
        setAlert(true);
    }
      setLoading(false);
      setCityName('');
  }

  return (
      <>
        <Overlay isVisible={alert}
                 height="auto"
                 onBackdropPress={()=>setAlert(false)}>
                   <View>
                      <Text h4 >Não foi possivel encontrar a cidade pesquisada.</Text>
                      <Button onPress={()=>setAlert(false)} title='OK'></Button>
                   </View>
        </Overlay>
        <SearchBar 
          round={true}
          lightTheme={true}
          showLoading={loading}
          placeholder="Informe a cidade" 
          placeholderTextColor="#4F4F4F"
          value={cityName}
          onSubmitEditing={handleSearch} 
          returnKeyType='search'
          onChangeText={(aux) => setCityName(aux)} />
      </>
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

export default TextSearch;