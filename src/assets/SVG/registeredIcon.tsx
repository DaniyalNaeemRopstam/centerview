import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const RegisteredIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={27}
    fill="none"
    {...props}>
    <Path
      fill="#0078C1"
      fillRule="evenodd"
      d="M6.222 0A6.222 6.222 0 0 0 0 6.222v16.445h.006a3.778 3.778 0 0 0 3.771 4h9.132a7.596 7.596 0 0 1-1.542-1.778h-7.59a2 2 0 1 1 0-4h6.445a7.556 7.556 0 0 1 11.111-6.668V3.556A3.555 3.555 0 0 0 17.778 0H6.222ZM3.778 19.111c-.735 0-1.42.21-2 .572V6.223a4.446 4.446 0 0 1 2.666-4.075V19.11h-.666Z"
      clipRule="evenodd"
    />
    <Path
      fill="#0078C1"
      fillRule="evenodd"
      d="M15.686 15.556c-.852 0-1.61.543-1.882 1.352l-.358 1.07a.89.89 0 0 0-.754 1.533A2.332 2.332 0 0 0 12 21.17v2.183a1.985 1.985 0 0 0 3.838.707h4.324A1.985 1.985 0 0 0 24 23.354v-2.182c0-.66-.272-1.254-.71-1.679a.89.89 0 0 0-.738-1.52l-.356-1.065a1.984 1.984 0 0 0-1.882-1.353h-4.628Zm-.196 1.917-.454 1.355h5.928l-.454-1.355a.206.206 0 0 0-.196-.14h-4.628a.206.206 0 0 0-.196.14Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default RegisteredIcon;
