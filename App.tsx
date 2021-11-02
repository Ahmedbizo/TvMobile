import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './component/Home';
import Details from './component/Details';





  
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Tv Show " component={Home} />
        <Stack.Screen name="Details " component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App; 

