import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

import PageNavigation from './src/pages/PageNavigation';

const App = () => {
  return (
    <View style={{flex:1}}>
    
        <PageNavigation/>
    </View>
  );
};

export default App;
