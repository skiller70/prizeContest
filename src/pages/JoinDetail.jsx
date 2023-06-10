import {View, Text, Image} from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const JoinDetail = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Image
        source={require('../../public/iphone.png')}
        style={{width: '100%', height: 250}}
      />
      {/* -----------------TITLE------------------ */}
      <Text style={{fontSize: 20, margin: 10}}>
        <View
          style={{
            borderWidth: 2,
            borderColor: '#21cdfc',
            paddingHorizontal: 5,
            borderRadius: 4,
          }}>
          <Text>Active</Text>
        </View>{' '}
        Apple iphone 14 Pro{' '}
        <Text style={{color: '#c70808'}}>
          256GB Space Black Apple iPhone 14 Pro 256GB Space Black
        </Text>
      </Text>
      {/* -----------------TITLE------------------ */}
      {/* -----------------Divider------------------ */}
      <View
        style={{
          width: '70%',
          marginHorizontal: 10,
          height: 7,
          backgroundColor: '#b9bcbd',
          borderRadius: 30,
        }}></View>

      {/* -----------------Divider------------------ */}
      {/* DRAW PUBLIC */}
      <View style={{display: 'flex', flexDirection: 'row',margin:10}}>
        <Text style={{fontSize:18}}>At least 77990 people draw prizes</Text>
       
    

     
      </View>

<View style={{display:"flex",justifyContent:"flex-end",marginTop:10,flexDirection:"row",marginHorizontal:10}}>
<Button style={{width:"35%",borderRadius:8}} mode='contained'>Recharge</Button>
</View>


      <Text style={{margin:10,fontSize:18}}>
          surplus 77990 {'\n'}
          People
        </Text>
      {/* DRAW PUBLIC */}
    </View>
  );
};

export default JoinDetail;
