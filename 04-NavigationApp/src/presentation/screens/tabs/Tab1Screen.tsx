import React from 'react'
import { Text, View } from 'react-native';
import { IonIcon } from '../../components/shared/IconIcon';
import { HamburgerMenu } from '../../components/shared/HamburguerMenu';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      {/* <Icon name="rocket-outline" color="#ff0000" size={20} /> */}
      <IonIcon name="rocket-outline" />
    </View>
  )
}