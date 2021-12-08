import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

export default () => {
  const switchTheme = (theme) => {
    tw.setColorScheme(theme);
  };

  return (
    <View style={tw`m-5 p-5 bg-gray-100 dark:bg-gray-900 rounded-lg`}>
      <Text style={tw`text-black dark:text-white`}>Select a theme</Text>
      <View style={tw`flex-row mt-2 -mx-1`}>
        <TouchableOpacity style={tw`flex-1 mx-1 py-2 px-3 bg-white rounded-lg`} onPress={() => switchTheme('light')}>
          <Text>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex-1 mx-1 py-2 px-3 bg-white rounded-lg`} onPress={() => switchTheme('dark')}>
          <Text>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  };
