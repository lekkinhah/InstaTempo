import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {LeftActions} from '../utils/SwipeableRow';
import {Icons} from '../utils/Icons';


const TempCard = ({data, onDelete}) => {
    let options = {weekday: 'short'};
    let optionsDay = {month:'short', day:'2-digit'};    
   
    return(
            <Swipeable
                renderLeftActions={LeftActions}
                onSwipeableLeftOpen={() =>{onDelete(data.cityId)}}>
                
                <Card containerStyle={styles.container} key={data.cityId}>
                    <View style={styles.titleStyle}>
                        <Text style={styles.textLeft}>{data.city}</Text>
                        <Text  style={styles.textRight}>{data.searchDt.toLocaleDateString('pt-BR', optionsDay)}</Text>
                    </View>
                                       
                    <Image 
                        style={styles.imageStyle}
                        source={Icons[data.weatherIcon]}
                        />
                    <Text style={styles.tempText}>{data.temp} C°</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <View style={styles.wrapper}>
                        <Icon name='wind' size={12} />
                        <Text style={styles.otherText}>{data.wind} m/s</Text>
                        <Icon iconStyle={{margin:10}} name='tint'  size={12} />
                        <Text style={styles.otherText}>{data.humidity}%</Text>
                    </View>
                    <View style={styles.wrapper}>
                        {data.listTemp.map(list => (
                            <View key={list.dt} style={styles.wrapperMini}>
                                <Image 
                                    style={styles.imageStylePQ}
                                    source={Icons[list.icon]}
                                />
                                <Text style={styles.textMini}>{list.dt.toLocaleDateString('pt-BR', options)}</Text>
                            </View>
                        ))}     
                    </View>
                </Card>
            </Swipeable>
        );
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor:'#ffffff',
        borderColor:'#DB7093',
        borderRadius:15,
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
        color:'#808080',
        fontWeight:"bold",
        textTransform:"uppercase",
    },
    wrapper:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:"center",
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
        textTransform:'capitalize'
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