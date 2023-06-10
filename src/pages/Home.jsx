import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Anouncement from '../components/Anouncement';
import JoinCard from '../components/JoinCard';
import WinnerCard from '../components/WinnerCard';

const Home = ({navigation }) => {
  return (
    <ScrollView style={{flex: 1}}>
      <Image
        source={require('../../public/hero.png')}
        style={{width: '100%', height: 200}}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 10,
          backgroundColor: 'white',
          paddingTop: 10,
        }}>
        <View>
          <View>
            <Ionicons
              name="book"
              size={30}
              style={{
                color: 'white',
                padding: 15,
                backgroundColor: 'blue',
                borderRadius: 50,
              }}
            />
          </View>
          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Must See
          </Text>
        </View>
        {/* ------------------------------------------------ */}
        <View>
          <View>
            <Ionicons
              name="gift"
              size={30}
              style={{
                color: 'white',
                padding: 15,
                backgroundColor: '#2bd9f0',
                borderRadius: 50,
              }}
            />
          </View>
          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Rewards
          </Text>
        </View>
        {/* ------------------------------------------------ */}
        <View>
          <View>
            <Ionicons
              name="share-social"
              size={30}
              style={{
                color: 'white',
                padding: 15,
                backgroundColor: '#0abf40',
                borderRadius: 50,
              }}
            />
          </View>
          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Share
          </Text>
        </View>
        {/* ------------------------------------------------ */}

        <View>
          <View>
            <Ionicons
              name="ios-document-text"
              size={30}
              style={{
                color: 'white',
                padding: 15,
                backgroundColor: '#05fce4',
                borderRadius: 50,
              }}
            />
          </View>

          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Play {'\n'}Method
          </Text>
        </View>
        {/* ------------------------------------------------ */}
      </View>
      {/* -----------********************____________________ */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 10,
          backgroundColor: 'white',
        }}>
        <View>
          <View>
            <Ionicons
              name="logo-google"
              size={30}
              style={{
                color: 'white',
                padding: 15,
                backgroundColor: '#f53b3b',
                borderRadius: 50,
              }}
            />
          </View>

          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Recharge
          </Text>
        </View>

        {/* ------------------------------------------------ */}

        <View style={{}}>
          <View>
            <AntDesign
              name="addusergroup"
              size={30}
              style={{
                color: 'white',
                padding: 15,
                backgroundColor: '#05ffb4',
                borderRadius: 50,
              }}
            />
          </View>

          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Groups
          </Text>
        </View>
        {/* ------------------------------------------------ */}

        <View style={{}}>
          <View>
            <Ionicons
              name="cloud-download"
              size={30}
              style={{
                color: 'white',
                padding: 15,
                backgroundColor: '#512feb',
                borderRadius: 50,
              }}
            />
          </View>

          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            App
          </Text>
        </View>

        {/* ------------------------------------------------ */}

        <View>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Ionicons
              name="phone-portrait"
              size={30}
              style={{
                color: 'white',
                padding: 15,
                backgroundColor: '#9417cf',
                borderRadius: 50,
              }}
            />
          </View>

          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Electronics
          </Text>
        </View>
      </View>

      {/* ------------------------------------------------ */}

      <Anouncement />
    <View >
    <WinnerCard/>

    </View>

    <View style={{marginVertical:10,display:"flex",flexDirection:"row",flexWrap:"wrap"}} >
    <JoinCard navigation={navigation}/>
    <JoinCard navigation={navigation}/>
    <JoinCard navigation={navigation}/>
    </View>
    {/* <JoinCard/> */}
{/* 
      <JoinCard/> */}
    </ScrollView>
  );
};

const style = StyleSheet.create({});

export default Home;
