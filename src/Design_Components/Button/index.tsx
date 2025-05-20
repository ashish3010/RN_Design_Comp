import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { ButtonKind, ButtonProps, ButtonSize } from './Button.types'
import Icon from '../Icon';
import { IconColor, IconSize } from '../Icon/Icon.types';
import useColor from '../Colors/useColor';
import { Colors } from '../Colors/Color.types';
import Spinner from '../Spinner';

const Button = ({
  size = ButtonSize.MEDIUM,
  isLoading = false,
  prefixIc,
  suffixIc,
  disabled = false,
  kind = ButtonKind.PRIMARY,
  title = 'button',
  onClick
}: ButtonProps) => {

  const disabledOpacity = (isLoading || disabled) ? 0.5 : 1;
  const isPrimary = kind === ButtonKind.PRIMARY;
  const isSecondary = kind === ButtonKind.SECONDARY;

  const iconColor = isPrimary ? IconColor.White : IconColor.Primary
  const backgroundColor = isPrimary ? useColor(Colors.Primary) : useColor(Colors.Transparent);
  const borderColor = isSecondary ? useColor(Colors.Primary) : useColor(Colors.Transparent);
  const borderWidth = isSecondary ? 2 : 0;
  const textColor = isPrimary ? useColor(Colors.White) : useColor(Colors.Primary);
  const spinnerColor = isPrimary ? Colors.White : Colors.Primary

  return (
    <Pressable
      onPress={onClick}
      style={[
        styles.buttonContainer,
        styles[size],
        {
          backgroundColor: backgroundColor,
          borderWidth: borderWidth,
          borderColor: borderColor,
          opacity: disabledOpacity
        }
      ]}>
      {isLoading ? <Spinner color={spinnerColor} /> : (
        <>
          {prefixIc && <Icon ic={prefixIc} size={IconSize.LARGE} color={iconColor} />}
          <Text style={{ color: textColor }}>{title}</Text>
          {suffixIc && <Icon ic={suffixIc} size={IconSize.LARGE} color={iconColor} />}
        </>
      )}
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
    columnGap: 8
  },
  large: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  medium: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  }
})
