import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import JoinCard from '../components/JoinCard';

const NewItem = () => {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        zIndex: 10,
      }}>
      <JoinCard />
      <JoinCard />
      <JoinCard />
      <JoinCard />
      <JoinCard />
      <JoinCard />
      <JoinCard />
      <JoinCard />
    </View>
  );
};

export default NewItem;
