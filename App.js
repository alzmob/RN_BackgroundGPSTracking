import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Alert } from 'react-native';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import moment from 'moment'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 37.33680278,
      longitude: 122.08362627,
      lastDate: new Date()
    }
  }


  componentDidMount() {
    BackgroundGeolocation.configure({
      desiredAccuracy: BackgroundGeolocation.HIGH_ACCURACY,
      stationaryRadius: 1,
      distanceFilter: 1,
      notificationTitle: 'Background tracking',
      notificationText: 'enabled',
      debug: false,
      startOnBoot: false,
      stopOnTerminate: true,
      locationProvider: BackgroundGeolocation.ACTIVITY_PROVIDER,
      interval: 10000,
      fastestInterval: 5000,
      activitiesInterval: 10000,
      stopOnStillActivity: false,
    });

    BackgroundGeolocation.on('stationary', (stationaryLocation) => {
      
    });

    BackgroundGeolocation.on('location', (location) => {
      BackgroundGeolocation.startTask(taskKey => {
        var currentDate = new Date()
        var duration = (currentDate - this.state.lastDate) / 1000
        if (duration > 5) {
          console.log('Location ============',location.latitude,  location.longitude)
          this.setState({lastDate: new Date(), latitude:location.latitude, longitude:location.longitude})
          this.callServer()
        }
        BackgroundGeolocation.endTask(taskKey);
      });
    });

    BackgroundGeolocation.on('authorization', (status) => {
      if (status !== BackgroundGeolocation.AUTHORIZED) {
        setTimeout(() =>
          Alert.alert('App requires location tracking permission', 'Would you like to open app settings?', [
            { text: 'Yes', onPress: () => BackgroundGeolocation.showAppSettings() },
            { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' }
          ]), 1000);
      }
    });

    BackgroundGeolocation.checkStatus(status => {
      if (!status.isRunning) {
        BackgroundGeolocation.start();
      }
    });
  }


  componentWillUnmount() {
    BackgroundGeolocation.removeAllListeners();
  }

  callServer() {
    console.log('Server Call with this.state !!!!!!!!!! ')
    // you can call server here.
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
