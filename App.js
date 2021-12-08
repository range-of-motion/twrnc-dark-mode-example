import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import tw from 'twrnc';

export default () => {
  return (
    <SafeAreaView>
      <View style={tw`m-5 p-5 bg-red-100 rounded-lg`}>
        <Text>Foo bar</Text>
      </View>
    </SafeAreaView>
  );
};
