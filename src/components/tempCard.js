import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

//const TempCard = ({ cityId, city, temp, weatherIcon, humidity, wind, description, listTemp }) => {
   const TempCard = (res) => {
    let options = {weekday: 'short'};
    let optionsDay = {month:'short', day:'2-digit'};    
   
    return(
            <View >
                <Card containerStyle={styles.container} key={res.res.cityId}>
                    <View style={styles.titleStyle}>
                        <Text style={styles.textLeft}>{res.res.city}</Text>
                        <Text  style={styles.textRight}>{new Date(res.res.searchDt * 1000).toLocaleDateString('pt-BR', optionsDay)}</Text>
                    </View>
                                       
                    <Image 
                        style={styles.imageStyle}
                        source={{uri: `http://openweathermap.org/img/wn/${res.res.weatherIcon}@2x.png`}}
                    />
                    <Text style={styles.tempText}>{res.res.temp} C°</Text>
                    <Text style={styles.description}>{res.res.description}</Text>
                    <View style={styles.wrapper}>
                        <Icon iconStyle={{margin:10}} name='wind' size={12} />
                        <Text style={styles.otherText}>{res.res.wind} m/s</Text>
                        <Icon iconStyle={{margin:10}} name='tint'  size={12} />
                        <Text style={styles.otherText}>{res.res.humidity}%</Text>
                    </View>
                    <View style={styles.wrapper}>
                    {res.res.listTemp.map(list => (
                        <View key={list.dt} style={styles.wrapperMini}>
                            <Image 
                                style={styles.imageStylePQ}
                                source={{uri: `http://openweathermap.org/img/wn/${list.weather[0].icon}.png`}}
                            />
                            <Text style={styles.textMini}>{new Date(list.dt * 1000).toLocaleDateString('pt-BR', options)}</Text>
                        </View>
                    ))}     
                    </View>
                </Card>
            </View>
            );
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor:'#2A97B3',
    },
    titleStyle:{
        flexDirection:'row',
        justifyContent:"center",
        alignContent:'space-around',
    },
    textLeft: {
        flex:1,
        textAlign:'left',
        color:'#111111',
        fontWeight:"bold",
        fontSize:20
    },
    textRight: {
        flex:1,
        textAlign:'right',
        color:'#fff',
        fontWeight:"bold",
        textTransform:"uppercase",
    },
    wrapper:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center"
    },
    wrapperMini:{
        justifyContent:"center",
        alignItems:"center",
        width:50,
        paddingTop:10
    },
    tempText: {
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center', 
    },
    imageStyle: {
        width:80,
        height:80,
        alignSelf:"center",
    },
    imageStylePQ: {
        width:35,
        height:35,
        alignSelf:"center",
    },
    textMini: {
        fontSize:12,
        textTransform:"uppercase",
    },
    description:{
        fontSize: 16,
        textAlign:'center',
    },
    icon: {
        padding:15,
        margin:10
    },
    otherText:{
        fontSize:12,
        paddingLeft:5,
        paddingRight:20,
    },
});

export default TempCard;