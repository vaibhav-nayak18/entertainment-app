import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';

const stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <stack.Screen
          name="Movie"
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: 'rgb(38 38 38)',
            },
            headerTintColor: 'white',
          }}
          component={MovieScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
