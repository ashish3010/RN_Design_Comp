import React from 'react'
import { View } from 'react-native';
import CustomStatusbar from '@/src/Design_Components/Statusbar';
import Header from '@/src/Design_Components/Header';
import { Provider } from 'react-redux';
import Screens from './screens';
import store from '@/src/store/store';

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <CustomStatusbar />
      <Provider store={store}>
        <Header />
        <Screens />
      </Provider>
    </View>
  )
}

export default RootLayout