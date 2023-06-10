import {View, Text} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

const Anouncement = () => {
  return (
    <View style={{display:'flex',flexDirection:"row",alignItems:"center",flexWrap:"wrap",padding:10,backgroundColor:"white",marginVertical:10}}>
      <AntDesign name="sound" size={30} style={{color:"#f53b3b"}}/>
      <Text style={{fontSize:16,marginHorizontal:10}}>Congratulations <Text style={{color:"#58d8f5"}}>Skiller </Text>   
        get GCash P300 eGIFT
      </Text>
    </View>
  );
};

export default Anouncement;
