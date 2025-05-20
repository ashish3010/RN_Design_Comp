import { View, Text, Pressable, BackHandler } from 'react-native'
import React from 'react'
import useColor from '../Colors/useColor'
import { Colors } from '../Colors/Color.types'
import Icon from '../Icon'
import { IconColor } from '../Icon/Icon.types'
import { useNavigation } from 'expo-router'
import { useSelector } from 'react-redux'
import { StoreState } from '@/src/store/store'

const Header = () => {
  const { headerDetails } = useSelector((state: StoreState) => state.headerInfo);

  const { title, subtitle, showBackIcon = true, suffixIcon, onSuffixClick, onBackPress = () => { }, handleBack } = headerDetails || {}
  const navigation = useNavigation()

  const onBack = () => {
    if (handleBack) {
      onBackPress()
      return
    }
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      BackHandler.exitApp();
    }
  }

  return (
    <View style={{ height: 64, backgroundColor: useColor(Colors.Primary), flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row', columnGap: 8, alignItems: 'center' }}>
        {showBackIcon && (
          <Pressable onPress={onBack}>
            <Icon ic="left" color={IconColor.White} />
          </Pressable>
        )}
        <View>
          <Text style={{ color: Colors.White }}>{title}</Text>
          {subtitle && <Text style={{ color: Colors.White }}>{subtitle}</Text>}
        </View>
      </View>
      {suffixIcon && (
        <Pressable onPress={onSuffixClick}>
          <Icon ic={suffixIcon} color={IconColor.White} />
        </Pressable>
      )}
    </View>
  )
}

export default Header