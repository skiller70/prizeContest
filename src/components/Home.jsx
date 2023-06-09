import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
  return (
    <View>
      <Image
        source={require('../../public/hero.png')}
        style={{width: '100%', height: 200}}
      />

      <View style={style.header1}>
      <View style={{display:"flex",flexDirection:'row', justifyContent:"space-evenly",flex:1,backgroundColor:"blue"}} >
      <View>
          <View style={{padding: 15, backgroundColor: 'red', borderRadius: 50}}>
            <Ionicons name="book" size={25} style={{color: 'white'}} />
          </View>
          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Must See
          </Text>
        </View>
        {/* ------------------------------------------------ */}
        <View>
          <View
            style={{padding: 15, backgroundColor: 'blue', borderRadius: 50}}>
            <Ionicons name="gift" size={35} style={{color: 'white'}} />
          </View>
          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Rewards
          </Text>
        </View>
        {/* ------------------------------------------------ */}
        <View>
          <View
            style={{padding: 15, backgroundColor: 'green', borderRadius: 50}}>
            <Ionicons name="share-social" size={35} style={{color: 'white'}} />
          </View>
          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Share
          </Text>
        </View>
        {/* ------------------------------------------------ */}

        <View>
          <View
            style={{padding: 15, backgroundColor: 'green', borderRadius: 50}}>
            <Ionicons
              name="ios-document-text"
              size={35}
              style={{color: 'white'}}
            />
          </View>
          <View>
            <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
              Play {'\n'}
              Method
            </Text>
          </View>
        </View>
        {/* ------------------------------------------------ */}

      </View>
{/* -----------********************____________________ */}
      <View >
      <View >
          <View
            style={{
              padding: 15,
              backgroundColor: 'blue',
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
            }}>
            <Ionicons name="logo-google" size={35} style={{color: 'white'}} />
          </View>

          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Recharge
          </Text>
        </View>

        {/* ------------------------------------------------ */}

        <View style={{}}>
          <View
            style={{
              padding: 15,
              backgroundColor: 'blue',
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
            }}>
            <AntDesign name="addusergroup" size={35} style={{color: 'white'}} />
          </View>

          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Groups
          </Text>
        </View>
        {/* ------------------------------------------------ */}

        <View style={{}}>
          <View
            style={{
              padding: 15,
              backgroundColor: 'blue',
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
            }}>
            <Ionicons
              name="cloud-download"
              size={35}
              style={{color: 'white'}}
            />
          </View>

          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            App
          </Text>
        </View>

        {/* ------------------------------------------------ */}

        <View style={{}}>
          <View
            style={{
              padding: 15,
              backgroundColor: 'blue',
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
            }}>
            <Ionicons
              name="phone-portrait"
              size={35}
              style={{color: 'white'}}
            />
          </View>

          <Text style={{fontSize: 15, paddingTop: 3, textAlign: 'center'}}>
            Electronics
          </Text>
        </View>
      </View>

        {/* ------------------------------------------------ */}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  header1: {
    marginTop: '10%',
    paddingLeft:"2%",
    display: 'flex',
    flexDirection: 'row',
  

    
  },
});

export default Home;
