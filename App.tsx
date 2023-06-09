import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Parent from './src/components/Parent';

const App = () => {
  return (
    <View style={{flex:1}}>
        <Parent/>
    </View>
  );
};

export default App;
