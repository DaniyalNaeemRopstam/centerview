import {ActivityIndicator, GestureResponderEvent, Image, Pressable, Text} from 'react-native';
import React from 'react';
import Theme from '../../utils/theme';

interface CustomButtonProps {
  text?: string;
  textStyle?: any;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  BtnContstyle?: any;
  rightImage?: boolean;
  rightImageSrc?: any;
  leftImage?: boolean;
  leftImageSrc?: any;
  rightImgStyle?: any;
  loader?:any,
}

export default function CustomButton({
  text,
  textStyle,
  onPress,
  BtnContstyle,
  rightImage,
  rightImageSrc,
  leftImage,
  leftImageSrc,
  rightImgStyle,
  loader =false,
}: CustomButtonProps) {
  return (
    <Pressable style={BtnContstyle} onPress={onPress} disabled={loader}>
      {leftImage && leftImageSrc}
      { 
        loader ? 
        <ActivityIndicator  color={Theme.WHITE_COLOR} size={"large"} />
        :
         <Text style={textStyle}>{text}</Text>
        }
      {rightImage && <Image source={rightImageSrc} style={rightImgStyle} />}
    </Pressable>
  );
}
