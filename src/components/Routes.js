import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SearchMultiCard from '../screens/SearchMultiCard';
import SearchGeoLocation from '../screens/SearchGeoLocation';


export default createAppContainer (
    createStackNavigator({
        Home: SearchGeoLocation,
        Multi: SearchMultiCard,
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerBackTitle:null,
            headerTitle:"InstaTempo"
            
        }
    })
);

