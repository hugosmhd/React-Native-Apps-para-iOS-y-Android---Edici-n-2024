import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburgerMenu } from '../components/shared/HamburguerMenu';
import { globalColors } from '../theme/theme';

const Tab = createMaterialTopTabNavigator();
 
export const TopTabsNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFFFFF', // color de las letras activas
          tabBarInactiveTintColor: '#F8F8F8',
          tabBarStyle: {
            backgroundColor: globalColors.primary, // para el fondo del tab
          },
          tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: 12
          },
          tabBarIndicatorStyle: {
            borderBottomColor: '#c39bd3', // color de la barra que aparece abajo
            borderBottomWidth: 2,
          },
        }}
      >
        <Tab.Screen name="Perfil" options={{ tabBarLabel: 'HOME' }} component={ ProfileScreen } />
        <Tab.Screen name="About" component={ AboutScreen } />
      </Tab.Navigator>
    </>
  );
};