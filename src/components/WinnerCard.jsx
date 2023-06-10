import {View, Text, Image} from 'react-native';
import React from 'react';

const WinnerCard = () => {
  return (
    <View
      style={{
        padding: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',

      }}>
      {/* ------------------1st Container------------------- */}
      <View style={{width: '35%', borderRightWidth: 0.2,borderColor:"#d0d4d9"}}>
        <Image
          source={require('../../public/iphone.png')}
          style={{width: '100%', height: 100}}
        />
        <Text style={{fontSize: 18}}>GCash P300 </Text>
        <Text style={{marginTop: 5, fontSize: 18, color: '#58d8f5'}}>Skiller</Text>
        <Text style={{marginTop: 5, fontSize: 18, color: '#f53b3b'}}>
          10333929
        </Text>
      </View>
      {/* ------------------1st Container------------------- */}
      {/* ------------------2nd Container------------------- */}
      <View style={{width: '35%', borderRightWidth: 0.2,borderColor:"#d0d4d9"}}>
        <Image
          source={require('../../public/iphone.png')}
          style={{width: '100%', height: 100}}
        />
        <Text style={{fontSize: 18, paddingHorizontal: 10}}>GCash P300 </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 18,
            color: '#58d8f5',
            paddingHorizontal: 10,
          }}>
         Skiller
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 18,
            color: '#f53b3b',
            paddingHorizontal: 10,
          }}>
          10333929
        </Text>
      </View>
      {/* ------------------2nd Container------------------- */}
      {/* ------------------third Container------------------- */}
      <View style={{width: '35%'}}>
        <Image
          source={require('../../public/iphone.png')}
          style={{width: '100%', height: 100}}
        />
        <Text style={{fontSize: 18, paddingHorizontal: 10}}>GCash P300 </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 18,
            color: '#58d8f5',
            paddingHorizontal: 10,
          }}>
        Skiller
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 18,
            color: '#f53b3b',
            paddingHorizontal: 10,
          }}>
          10333929
        </Text>
      </View>
      {/* ------------------third Container------------------- */}
    </View>
  );
};

export default WinnerCard;
