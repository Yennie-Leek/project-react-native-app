import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Feed } from './screens/Feed';
import { ChuckNorris } from './screens/ChuckNorris';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { KanyeWest } from './screens/KanyeWest'
import { RandomAdvice } from './screens/RandomAdvice'


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HOME" component={Feed} />
        <Drawer.Screen name="CHUCK NORRIS" component={ChuckNorris} />
        <Drawer.Screen name="KANYE WEST" component={KanyeWest} />
        <Drawer.Screen name="GUESS WHAT" component={RandomAdvice} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
