import React from 'react';
import { SafeAreaView } from 'react-native';
import Settings from './Settings';
import tw, { useDeviceContext } from 'twrnc';

export default () => {
  useDeviceContext(tw);

  return (
    <SafeAreaView>
      <Settings />
    </SafeAreaView>
  );
};
