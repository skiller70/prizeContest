import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

import Home from './Home';
import UserProfile from './UserProfile';
import Class from './Class';
import Crown from './Crown';

const Tab = createBottomTabNavigator();

const Parent = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#0366fc',
            tabBarStyle: {paddingVertical: 10, height: 65},
            tabBarLabelStyle: {fontSize: 15, paddingVertical: 3},
            headerShown: false,
          }}>
          <Tab.Screen
            name="home"
            component={Home}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <View>
                    <Feather
                      name="home"
                      size={35}
                      style={{color: focused ? '#0366fc' : ''}}
                    />
                  </View>
                </>
              ),
            }}
          />

          <Tab.Screen
            name="class"
            component={Class}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <View>
                    <FontAwesome
                      name="th-large"
                      size={35}
                      style={{color: focused ? '#0366fc' : ''}}
                    />
                  </View>
                </>
              ),
            }}
          />

          <Tab.Screen
            name="latest"
            component={Crown}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <View>
                    <FontAwesome
                      name="crown"
                      size={35}
                      style={{color: focused ? '#0366fc' : ''}}
                    />
                  </View>
                </>
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={UserProfile}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <View>
                    <Feather
                      name="user"
                      size={35}
                      style={{color: focused ? '#0366fc' : ''}}
                    />
                  </View>
                </>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
FontAwesome;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});

export default Parent;
// color={focused?"#0366fc":""}
