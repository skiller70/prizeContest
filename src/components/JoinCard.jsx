import {View, Text, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native"
import React from 'react';

const JoinCard = () => {

  const navigation = useNavigation()
  return (
    <View style={{width: '50%', backgroundColor: 'white', paddingVertical: 10,borderWidth:0.5,borderColor:"#d0d4d9"}}>
      <Image
        source={require('../../public/iphone.png')}
        style={{width: '100%', height: 150}}
      />
      <Text style={{padding: 10, fontSize: 20}}>Apple Iphone 14</Text>
      {/* ----------------------------------------- */}
      {/* ---TEXT-- */}
      <Text style={{marginHorizontal: 10, fontSize: 18, marginVertical: 5}}>
        buy <Text style={{color: '#58d8f5'}}>60.5% </Text>
      </Text>
      <View>
        {/* ---------Progress bar----------- */}
        <View
          style={{
            width: '60%',
            marginHorizontal: 10,
            height: 8,
            borderRadius: 50,
            backgroundColor: '#dcddde',
          }}>
          <View
            style={{
              backgroundColor: '#fabb0c',
              width: '80%',
              height: '100%',
              borderRadius: 50,
            }}></View>
        </View>
        {/* ---------Progress bar----------- */}

        {/* ------------------------JOIN BUTTON---------------- */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginHorizontal: 10,
          }}>
          <Button
          onPress={()=>{navigation.navigate("joindetail")}}
            textColor="red"
            style={{
              width: '50%',
              marginTop: 10,
              borderRadius: 8,
              borderColor: 'red',
            }}
            mode="outlined">
            Join
          </Button>
        </View>
      </View>
    </View>
  );
};

export default JoinCard;
