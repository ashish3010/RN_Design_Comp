import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setHeaderDetails } from '@/src/Design_Components/Header/store/headerSlice';

const IntroScreenComp = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeaderDetails({
      title: 'Intro',
    }))
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={{ color: 'black' }}>Intro screen with ID</Text>
      </ScrollView>
    </View>
  );
};

export default IntroScreenComp;