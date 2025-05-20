import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router';

const HomePage = () => {

  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setTimeout(() => {
      router.push('/intro/1');
    }, 3000)

    return (() => {
      clearTimeout(timer)
    })
  }, [router]);

  return (
    <View>
      <Text>Redirecting to intro in 3 seconds</Text>
    </View>
  )
}

export default HomePage