import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import BackgroundTimer from 'react-native-background-timer';


export default class App extends React.Component {

  componentWillMount() {
    BackgroundTimer.runBackgroundTimer(() => { 
      Geolocation.getCurrentPosition((position) => {
        console.log('latitude=======', position.coords.latitude)
        console.log('longitude=======', position.coords.longitude)

        var url='https://lameen.free.beeceptor.com/rntest'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            })
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log('Notificatins======', responseData)
        }).catch((error) => {
          console.error(error);
        });

      });
    }, 
    3000);
  }

  render () {
    return (
      <SafeAreaView>
        <TouchableOpacity style={{marginTop:200, alignSelf:'center'}}>
          <Text>Get Location</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};
