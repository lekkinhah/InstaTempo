import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Icons} from '../utils/Icons';
import axios from 'axios';
import {baseURL} from '../services/api'; 
import apiKey from '../utils/apiKey';
import Geolocation from '@react-native-community/geolocation';


const SearchGeoLocation = ({navigation, units = 'metric', lang='pt'}) => {

    const [data, setData] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [alert, setAlert] = useState(false);

    handleGeoSearch = async () => {
        try {
             let result = await axios.get(`${baseURL}weather?lat=${latitude}&lon=${longitude}&APPID=${apiKey}&units=${units}&lang=${lang}`);
             setData(result.data);
         } catch (error) {
             setAlert(true);
        }
     }

    useEffect(()=>{
        if(latitude && longitude)
            handleGeoSearch();
    }, [latitude, longitude]);
    
    useEffect(()=>{
        Geolocation.getCurrentPosition(
            (position) => {
                  setLatitude(position.coords.latitude);
                  setLongitude(position.coords.longitude);
              }
          );
    }, []);
    
   
console.log(data);
 
    return (
        <>
            <Overlay isVisible={alert}
                    height="auto"
                    onBackdropPress={()=>setAlert(false)}>
                <View>
                    <Text h4>Não foi possivel encontrar a cidade pesquisada.</Text>
                    <Button onPress={()=>setAlert(false)} title='OK'></Button>
                </View>
            </Overlay>
            <View style={styles.container}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.textTemp}>{data.main && data.main.temp.toFixed(0)}°C</Text>
                <Image 
                    style={styles.imageStyle}
                    source={Icons[data.weather && data.weather[0].icon]}
                    />
                <Text style={styles.textDescription}>{data.weather && data.weather[0].description}</Text>
                <View style={styles.adicionalContainer}>
                    <Icon name='wind' size={16} />
                    <Text style={styles.otherText}> {data.wind && data.wind.speed}m/s</Text>
                    <Icon iconStyle={{margin:10}} name='tint'  size={16} />
                    <Text style={styles.otherText}>{data.main && data.main.humidity} %</Text>
                </View>
                <View style={styles.buttonContainer}>
                     
                    <Button type='outline' 
                            icon={
                                <Icon
                                  name="search"
                                  size={15}
                                  color="#DB7093"
                                />
                              }
                            containerStyle={{paddingHorizontal:10}} 
                            buttonStyle={styles.buttonStyle} 
                            titleStyle={styles.titleButtonStyle}
                            title='Mais cidades' 
                            onPress={()=>{navigation.navigate('Multi')}}
                            />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        alignItems:"center",
    },
    imageStyle: {
        width:120,
        height:120,
        alignSelf:"center",
        margin:20
    },
    title:{
        fontSize:18,
        justifyContent:"center",
        marginTop:20,
        marginBottom:35
    },
    textTemp:{
        fontSize:45,
        justifyContent:"center"
    },
    textDescription:{
        fontSize:20,
        marginBottom:25,
        textTransform:"capitalize"
    },
    adicionalContainer:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
    },
    otherText:{
        fontSize:16,
        paddingLeft:5,
        paddingRight:20,
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        marginTop:50,
    },
    buttonStyle:{
        borderColor:'#DB7093',
        width:150,
    },
    titleButtonStyle:{
        color:'#DB7093',
        marginHorizontal:10
    },
});

export default SearchGeoLocation;