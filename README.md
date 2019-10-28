# InstaTempo

**InstaTempo** is an app that consumes the API provided by Open Weather Map. It allows you to view the current temperature and climate according to the device's geolocation, as well as allow you to search different cities of the world.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```
Node v10.15.3
```

### Installing

To run the application execute the following on CMD prompt

```
git clone https://github.com/lekkinhah/InstaTempo.git
cd InstaTempo
npm install 
```

**_!IMPORTANT!_**
This project uses two libs that needs to be linked to react native as autolink is not yet supported.
```
react-native link react-native-vector-icons
react-native link react-native-gesture-handler
```
_When running the project, ignore autolinking for native dependencies error_

Then, to run the project uses:
```
react-native run-android 
```
or 
```
react-native run-ios
```

## APP Features

### Home Screen
<p align="center">
<img src="https://user-images.githubusercontent.com/5490967/67716871-5d352a80-f9ab-11e9-9f4f-37822561662f.jpeg" height="427" width="240">
</p>

This screen shows the weather using the _GeoLocation_ of the device. On first use, authorization will be requested for access to user's location data.

#### Info of Home Screen
- City (GeoLocation)
- Current temperature (°C)
- Icon of current weather
- Description of current Weather
- Wind speed (m/s)
- Relative humidity (%)

> API provides multilanguage data, however Brazilian Portuguese is not available. The APP uses PT - Portugal

The button directs the user to the search screen of more cities (Search Screen).

### Search Screen
<p align="center">
<img src="https://user-images.githubusercontent.com/5490967/67717279-2875a300-f9ac-11e9-9c65-f433411441dd.jpeg" height="427" width="240">
  </p>

This screen offers search of various cities through Searchbar. Each result is presented on a card, creating a list of searches performed by the user. 
#### Info of Each Card
- City and date
- Icon of current weather
- Current temperature (°C)
- Description of current Weather
- Wind speed (m/s)
- Relative humidity (%)
- Weather forecast for next five days

Its possible to delete each card by swiping to the right.

<p align="center">
<img src="https://user-images.githubusercontent.com/5490967/67718663-f6b20b80-f9ae-11e9-8b95-f05885ffd200.jpeg" height="229" width="240">
  </p>


## Built With

* [React Native](https://github.com/facebook/react-native) - Build mobile apps
* [React Native Elements v1.2.0](https://react-native-elements.github.io/react-native-elements/) - Frontend framework
* [Open Weather Map](https://openweathermap.org) - Weather API


## Author

* **Letícia Vargas ** 

## License

This project is licensed under GNU General Public License v3.0
