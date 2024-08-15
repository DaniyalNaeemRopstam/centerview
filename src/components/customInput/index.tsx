import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import {TextInput, View, Text, TouchableOpacity} from 'react-native';
import Theme from '../../utils/theme';
import OpenLock from '../../assets/SVG/openLock';
import Lock from '../../assets/SVG/lock';

interface CustomInputProps {
  hasName?: boolean;
  textBoxContainer?: any;
  txtbxstyl?: any;
  plcholder?: string;
  allowMultiLine?: boolean;
  encryption?: boolean;
  encryptionIconContainer?: any;
  encryptionIconSource?: any;
  rightIcon?: boolean;
  rightIconSource?: any;
  rightIconStyle?: any;
  control?: any;
  errTxt?: any;
  errTxtstyle?: any;
  onChangeTexts?: (e: string) => void;
  fieldName?: any;
  keyboardType?: any;
  autoCap?: any;
  value?: string;
  editable?: boolean;
  selectionColor?: string;
  onSubmitEditing?: any;
  returnKeyType?: any;
  reference?: any;
  iconPress?: any;
  maxLength?: any;
  textBoxMainCont?: any;
  name?: string;
  nameStyle?: any;
}

export const CustomInput = ({
  textBoxContainer,
  txtbxstyl,
  plcholder,
  allowMultiLine,
  encryption,
  encryptionIconContainer,
  rightIcon,
  rightIconSource,
  rightIconStyle,
  control,
  errTxt,
  onChangeTexts,
  fieldName,
  keyboardType,
  autoCap,
  value,
  editable,
  selectionColor,
  onSubmitEditing,
  returnKeyType,
  reference,
  errTxtstyle,
  iconPress,
  maxLength,
  name,
  textBoxMainCont,
  nameStyle,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={textBoxMainCont}>
      <Text style={nameStyle}>{name}</Text>
      <View style={textBoxContainer}>
        <Controller
          control={control}
          name={fieldName}
          render={({field: {onChange}}) => (
            <>
              <TextInput
                removeClippedSubviews={false}
                ref={reference}
                editable={editable}
                style={txtbxstyl}
                placeholder={plcholder}
                onSubmitEditing={onSubmitEditing}
                returnKeyType={returnKeyType}
                placeholderTextColor={Theme.GAINSBORO_GREY}
                multiline={allowMultiLine}
                onChangeText={(e: string) => {
                  onChange(e), onChangeTexts && onChangeTexts(e);
                }}
                secureTextEntry={encryption ? showPassword : !showPassword}
                value={value}
                keyboardType={keyboardType}
                selectionColor={selectionColor}
                autoCapitalize={!autoCap ? 'none' : 'sentences'}
                maxLength={maxLength}
              />
              {rightIcon ? (
                iconPress ? (
                  <TouchableOpacity
                    style={rightIconStyle}
                    activeOpacity={0.8}
                    onPress={iconPress}>
                    {rightIconSource}
                  </TouchableOpacity>
                ) : (
                  rightIconSource
                )
              ) : null}
            </>
          )}
        />

        {encryption && (
          <TouchableOpacity
            style={encryptionIconContainer}
            onPress={() => {
              setShowPassword(!showPassword);
            }}>
            {showPassword ? <OpenLock /> : <Lock />}
          </TouchableOpacity>
        )}
      </View>
      <Text allowFontScaling={false} style={errTxtstyle}>
        {errTxt}
      </Text>
    </View>
  );
};
