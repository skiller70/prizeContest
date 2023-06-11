import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Parent from './Parent';
import JoinDetail from './JoinDetail';

const Stack = createStackNavigator();

const PageNavigation = () => {
  return (
    <View style={{flex: 1, display: 'flex'}}>
 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="main" component={Parent} options={{headerShown:false}} />

          <Stack.Screen name="joindetail" component={JoinDetail}  options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default PageNavigation;
