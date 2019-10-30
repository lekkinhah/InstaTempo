import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SearchMultiCard from '../screens/SearchMultiCard';
import SearchGeoLocation from '../screens/SearchGeoLocation';
import { Image } from 'react-native';


export default createAppContainer (
    createStackNavigator({
        Home: SearchGeoLocation,
        Multi: SearchMultiCard,
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerBackTitle:null,
            headerTitle:(
                <Image 
                    resizeMode='cover'
                    style={{
                        width:150,
                        height:40,
                        resizeMode:'contain',
                        alignSelf:'center',
                    }} 
                    source={require('../images/logo.png')}
                    />
                ),
            
        }
    })
);

