import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import LottieView, { LottieViewProps } from 'lottie-react-native';

interface LottieJsonProps {
  src: string
  loop?: boolean
  autoplay?: boolean
  style?: StyleProp<ViewStyle>
  width: number
  height: number
}

const LottieJson = ({
  src,
  loop,
  autoplay = true,
  style,
  width,
  height
}: LottieJsonProps) => {

  return (
    <LottieView
      style={[{ width, height }, style]}
      source={{ uri: src }}
      autoPlay={autoplay}
      loop={loop}
    />
  )
}

export default LottieJson