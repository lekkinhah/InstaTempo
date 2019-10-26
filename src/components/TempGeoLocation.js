import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import {baseURL} from '../services/api'; 
import apiKey from '../utils/apiKey';


const TempGeoLocation  = () => {
    
    const[location, setLocation] = useState('');
    
    navigator.geolocation.getCurrentPosition(
        position => console.log(position)
    );
    
    console.log("localização:", location);

    return (
     <Text>Olá</Text>
    );
}

export default TempGeoLocation;