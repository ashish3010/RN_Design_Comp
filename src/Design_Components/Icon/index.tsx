import { Pressable } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { IconColor, IconProps, IconSize } from './Icon.types';
import useColor from '../Colors/useColor';
import { Colors } from '../Colors/Color.types';

const getIconSizeOnly = (size?: IconSize) => {
  switch (size) {
    case IconSize.XS:
      return { size: 12 };
    case IconSize.SMALL:
      return { size: 16 };
    case IconSize.MEDIUM:
      return { size: 24 };
    case IconSize.LARGE:
      return { size: 32 };
    case IconSize.XL:
      return { size: 40 };
    case IconSize.XXL:
      return { size: 48 };
    default:
      return { icon: 24 };
  }
};

const getIconColor = (color?: IconColor) => {
  switch (color) {
    case IconColor.Black:
      return { color: useColor(Colors.Black) }
    case IconColor.Primary:
      return { color: useColor(Colors.Primary) }
    case IconColor.Success:
      return { color: useColor(Colors.Success) }
    case IconColor.Warning:
      return { color: useColor(Colors.Warning) }
    case IconColor.Error:
      return { color: useColor(Colors.Error) }
    case IconColor.White:
      return { color: useColor(Colors.White) }
    case IconColor.Grey_80:
      return { color: useColor(Colors.Grey_80) }
    default:
      return { color: useColor(Colors.Primary) }
  }
}

const Icon = ({
  ic,
  size = IconSize.MEDIUM,
  color = IconColor.Primary,
  isClickable = false,
  onClick
}: IconProps) => {

  if (!ic) {
    return null
  }

  return (
    <Pressable onPress={isClickable ? onClick : () => { }}>
      <AntDesign
        name={ic}
        size={getIconSizeOnly(size).size}
        color={getIconColor(color).color}
      />
    </Pressable>
  )
}

export default Icon