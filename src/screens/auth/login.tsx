import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Theme from '../../utils/theme';
import AppLogo from '../../assets/SVG/appLogo';
import CustomButton from '../../components/buttons';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import {saveUser} from '../../redux/features/AuthSlice';
import {SignIn} from '../../components/validations';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import fonts from '../../utils/fonts';
import LoginImage from '../../assets/SVG/login';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CustomInput} from '../../components/customInput';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import axiosWrapper from '../../services/AxiosWrapper';
import { API_URLS } from '../../services/apiPathList';
import AlertService from '../../services/AlertService';

export default function Login() {
  const inputs = Array.from({length: 1}, () => useRef<any>());
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(SignIn),
  });

  const onSubmit = () => {
    // dispatch(saveUser({isLoggedIn: true}));
    loginAPICall({username:email,password})
  };

  const loginAPICall = async (data:any) => {
    try {
      setLoader(true)
      let response = await axiosWrapper('POST', API_URLS.LOGIN_URL, data, null, false, 'json', true);
      if (response.data) {
        dispatch(saveUser({...response.data,isLoggedIn: true}));
      }else{
        AlertService.toastPrompt("Something went wrong...",'error')
      }
    } catch (error) {
      // AlertService.toastPrompt("Error","")

    } finally {
      setLoader(false)
    }
  }


  return (
    <KeyboardAwareScrollView
      keyboardOpeningTime={Number.MAX_SAFE_INTEGER}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles().mainCont}
      enableResetScrollToCoords={false}
      keyboardShouldPersistTaps="handled">
      <AppLogo />

      <Text style={styles().welcome}>Welcome</Text>
      <Text style={styles().hello}>Hello there, login to continue</Text>

      <LoginImage />

      <CustomInput
        textBoxMainCont={styles().textBoxMainCont}
        nameStyle={styles().nameStyle}
        name="Username/Email"
        onSubmitEditing={() => inputs[0]?.current?.focus()}
        value={email}
        fieldName="email_address"
        keyboardType="email-address"
        returnKeyType={'next'}
        textBoxContainer={styles().textInput}
        txtbxstyl={styles().txtbxstyle}
        control={control}
        errTxt={errors?.email_address && errors?.email_address?.message}
        errTxtstyle={styles().errtxtstyle1}
        onChangeTexts={(text: string) => {
          setEmail(text);
        }}
        plcholder={'Email address'}
        rightIcon={true}
        autoCap={false}
      />

      <CustomInput
        name="Password"
        nameStyle={styles().nameStyle}
        reference={inputs[0]}
        returnKeyType={'done'}
        value={password}
        editable={true}
        autoCap={false}
        fieldName="password"
        control={control}
        keyboardType="default"
        textBoxContainer={styles().textInput}
        txtbxstyl={styles().txtbxstyle}
        plcholder={'Password'}
        errTxt={errors?.password && errors?.password?.message}
        errTxtstyle={styles().errtxtstyle1}
        onChangeTexts={(text: string) => {
          setPassword(text);
        }}
        encryption={true}
      />

      <BouncyCheckbox
        size={20}
        fillColor={Theme.ROLLER_COASTER_BLUE}
        unFillColor={Theme.WHITE_SMOKE}
        text="Remember me"
        iconStyle={styles().iconStyle}
        innerIconStyle={styles(remember).innerIconStyle}
        textStyle={styles().textStyle}
        onPress={setRemember}
        style={styles().checkBoxstyle}
      />
      <CustomButton
        BtnContstyle={styles().signInBtn}
        text="Login"
        textStyle={styles().signInTxt}
        onPress={handleSubmit(onSubmit)}
        loader={loader}
        
      />
    </KeyboardAwareScrollView>
  );
}

const styles = (props?: boolean) =>
  StyleSheet.create({
    mainCont: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:heightPercentageToDP(6)
    },
    welcome: {
      fontSize: 24,
      lineHeight: 28,
      fontFamily: fonts.SemiBold,
      color: Theme.ROLLER_COASTER_BLUE,
      marginTop: heightPercentageToDP(4.5),
    },
    hello: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: fonts.Medium,
      color: Theme.JET_COLOR,
      marginTop: heightPercentageToDP(0.4),
      marginBottom: heightPercentageToDP(3.2),
    },
    textBoxMainCont: {
      marginTop: heightPercentageToDP(4),
    },
    nameStyle: {
      fontSize: 12,
      fontFamily: fonts.Medium,
      color: Theme.LEAD_COLOR,
      marginVertical: 5,
    },
    textInput: {
      height: heightPercentageToDP(6.8),
      width: widthPercentageToDP(90),
      paddingHorizontal: 15,
      borderRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: Theme.GAINSBORO_GREY,
    },
    txtbxstyle: {
      height: heightPercentageToDP(6.8),
      flex: 1,
      fontFamily: fonts.Medium,
      fontSize: 14,
      color: Theme.BLACK_COLOR,
    },
    errtxtstyle1: {
      top: 5,
      color: Theme.RED_RIDING_HOOD,
      fontSize: 14,
      fontFamily: fonts.Regular,
      width: widthPercentageToDP(85),
    },
    iconStyle: {borderRadius: 4},
    innerIconStyle: {
      borderWidth: 2,
      borderRadius: 4,
      borderColor: props ? Theme.ROLLER_COASTER_BLUE : Theme.SILVER_COLOR,
    },
    textStyle: {
      fontFamily: fonts.Medium,
      textDecorationLine: 'none',
      fontSize: 12,
      marginLeft: widthPercentageToDP(-1),
    },
    checkBoxstyle: {width: widthPercentageToDP(90)},
    signInBtn: {
      marginTop: heightPercentageToDP(10),
      height: heightPercentageToDP(6.1),
      borderRadius: 15,
      backgroundColor: Theme.ROLLER_COASTER_BLUE,
      alignItems: 'center',
      justifyContent: 'center',
      width: widthPercentageToDP(90),
    },
    signInTxt: {
      color: Theme.WHITE_COLOR,
      fontFamily: fonts.Medium,
      fontSize: 16,
      lineHeight: 24,
    },
  });
