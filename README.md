# RN_BackgroundGPSTracking


## 1. Overview
React native GPS tracking in background mode.

## 2. Technical features

### Mobile Development Library
- react-native: `v0.61.5`
- @react-native-community/geolocation: `^2.0.2`
- react-native-background-timer: `^2.1.1`

## 3. Installation
### background timer
- npm install react-native-background-timer --save
- cd ios
- pod install
### geolocation
- npm install @react-native-community/geolocation --save
- cd ios
- pod install
### Add Location permission on AndroidManifest.xml file.
- uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"
### Set background mode in xcode Signing & Capablities.
- Location updates
- Background fetch

## License

```
Copyright (c) 2017 Addon Solutions

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
