import {BASE_URL_FROM_ENV} from '@env';
import api from './axiosConfig';

const API_LOGIN_OTP = `${BASE_URL_FROM_ENV}/api/user/otp/login`;

const loginOtpApi = async (OtpData: any) => {
  const data = JSON.stringify({
    userID: OtpData?.userID,
    otp: OtpData?.otp,
    mobileToken: OtpData?.mobileToken,
  });

  const config = {
    method: 'post',
    url: API_LOGIN_OTP,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  const response = await api(config);
  return response.data;
};

const AuthService = {
  loginOtpApi,
};
export default AuthService;
