import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Home from './Home';
import Crown from './Crown';
import Class from './Class';
import UserProfile from './UserProfile';
import JoinDetail from './JoinDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Parent = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#0366fc',
            tabBarStyle: {paddingVertical: 10, height: 80},
            tabBarLabelStyle: {fontSize: 20, paddingVertical: 3},
            headerShown: false,
            tabBarLabelStyle: {
              display: 'none',
            },
          }}>
          <Tab.Screen
            name="home"
            component={Home}
            options={{
              tabBarLabelStyle: {
                display: 'flex',
                fontSize: 18,
              },
              tabBarIcon: ({focused}) => (
                <>
                  <View>
                    <Feather
                      name="home"
                      size={35}
                      // color={focused ? '#0366fc' : ''}
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
              tabBarLabelStyle: {
                display: 'flex',
                fontSize: 18,
              },
              tabBarIcon: ({focused}) => (
                <>
                  <View>
                    <FontAwesome
                      name="th-large"
                      size={35}
                      // style={{color: focused ? '#0366fc' : ''}}
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
              tabBarLabelStyle: {
                display: 'flex',
                fontSize: 18,
              },
              tabBarIcon: ({focused}) => (
                <>
                  <View>
                    <FontAwesome
                      name="crown"
                      size={35}
                      // style={{color: focused ? '#0366fc' : ''}}
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
              tabBarLabelStyle: {
                display: 'flex',
                fontSize: 18,
              },
              tabBarIcon: ({focused}) => (
                <>
                  <View>
                    <Feather
                      name="user"
                      size={35}
                      // style={{color: focused ? '#0366fc' : ''}}
                    />
                  </View>
                </>
              ),
            }}
          />

          <Tab.Screen
            name="joindetail"
            component={JoinDetail}
            options={{
              tabBarLabelStyle: {
                display: 'none',
              },
              tabBarButton: () => null,
              tabBarVisible: false,
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
