import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DisplayScreen from './screens/DisplayScreen';
import AddScreen from './screens/AddScreen';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DisplayScreen">
        <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
        <Stack.Screen name="AddScreen" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
