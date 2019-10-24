import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TempCard = ({ city, temp, weatherIcon, humidity, wind, description }) => {

    return(
     <View>
         <Card title={city} containerStyle={styles.container}>
            
            <Text style={styles.tempText}>{temp} C°</Text>
            <Image 
                style={styles.imageStyle}
                source={{uri: `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}}
            />
            <Text style={styles.description}>{description}</Text>
            <View style={styles.wrapper}>
                <Text style={styles.otherText}>
                    <Icon iconStyle={{margin:10}} name='wind' size={12} />
                    {wind} km/h</Text>
                
                <Text style={styles.otherText}>
                    <Icon iconStyle={{margin:10}} name='tint'  size={12} />
                     {humidity}%</Text>
            </View>
           
        </Card>
     </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor:'lightblue'
    },
    wrapper:{
        flexDirection:'row',
        borderWidth:1,
        justifyContent:"center",
    },
    tempText: {
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center', 
    },
    imageStyle: {
        width:120,
        height:120,
        alignSelf:"center",
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
        paddingHorizontal:20,
        borderWidth:1,
        borderColor:'red'
    },
});

export default TempCard;