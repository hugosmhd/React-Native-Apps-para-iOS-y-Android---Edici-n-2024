import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocationStore } from '../../store/location/useLocationStore';
import { LoadingScreen } from '../loading/LoadingScreen';
import { Map } from '../../components/maps/Map';

export const MapScreen = () => {
  const { lastKnownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if ( lastKnownLocation === null ) {
      getLocation();
    }
  }, [])
  
 

  if ( lastKnownLocation === null ) {
    return (<LoadingScreen />)
  }


  return (
    <View style={ styles.container}>



      <Map 
        initialLocation={ lastKnownLocation }
      />


   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });